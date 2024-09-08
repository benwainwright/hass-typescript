import * as entities from "@entities";

import {
  HassConfig,
  Logger,
  RawState,
  State,
  StateChangedEvent,
  Entities,
  IdType,
  IClient,
  StateLoadCallback,
  StateChangedCallback,
  EntityType,
} from "@types";
import { removeItemAtIndex } from "@utils";

import { FIVE_MINUTES } from "./constants.js";
import { HomeAssistantApi } from "./home-assistant-api.js";
import { matchesId } from "./matches-id.js";

export class Client implements IClient {
  private entities: Map<IdType, { id: IdType }> = new Map();
  private hassApi: HomeAssistantApi;
  private states: Map<string, State> = new Map<string, State>();
  private timers: NodeJS.Timeout[] = [];

  private stateLoadCallbacks: Map<string, StateLoadCallback<unknown>[]> =
    new Map<string, StateLoadCallback<unknown>[]>();

  private stateChangedCallbacks: Map<string, StateChangedCallback<unknown>[]> =
    new Map<string, StateChangedCallback<unknown>[]>();

  private constructor(
    private hassConfig: HassConfig,
    private logger: Logger
  ) {
    this.hassApi = new HomeAssistantApi(this.hassConfig);

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const loadStateTimers = setInterval(async () => {
      await this.loadStates();
    }, FIVE_MINUTES);

    this.timers.push(loadStateTimers);
  }

  /**
   * Create a new Hass client instance.
   */
  public static async start(config: HassConfig, logger: Logger) {
    const client = new Client(config, logger);
    await client.init();
    return client;
  }

  public getEntity<T extends IdType>(id: T): EntityType<T> {
    const entity = this.entities.get(id);

    if (entity && matchesId(entity, entity.id, id)) {
      return entity;
    }

    const newEntity = Object.entries(entities)
      .map(([, entity]) => entity)
      .map((item) => {
        try {
          return item.make(id, this);
        } catch {
          return undefined;
        }
      })
      .find((item) => item);

    if (newEntity && matchesId(newEntity, newEntity.id, id)) {
      this.entities.set(id, newEntity);
      return newEntity;
    }

    throw new Error("Unrecognised ID");
  }

  public getEntities<T extends Record<string, IdType>, R extends Entities<T>>(
    ids: T
  ): R {
    return Object.fromEntries(
      Object.entries(ids).map(([key, value]) => [key, this.getEntity(value)])
    ) as R;
  }

  public close() {
    this.hassApi.close();
    this.timers.forEach((timer) => {
      clearInterval(timer);
    });
    this.logger.info(`Hass client closed`);
  }

  [Symbol.dispose](): void {
    this.close();
  }

  public onStateLoaded<S>(entityId: string, callback: StateLoadCallback<S>) {
    const storedCallbacks = this.stateLoadCallbacks.get(entityId);

    this.stateLoadCallbacks.set(entityId, [
      ...(storedCallbacks ?? []),
      callback as StateLoadCallback<unknown>,
    ]);
  }

  public async setState<I extends IdType, S>(entityId: I, state: S) {
    return await this.hassApi.http.post(`states/${entityId}`, state);
  }

  public onStateChanged<S>(
    entityId: string,
    callback: StateChangedCallback<S>
  ) {
    const storedCallbacks = this.stateLoadCallbacks.get(entityId);
    this.stateChangedCallbacks.set(entityId, [
      ...(storedCallbacks ?? []),
      callback as StateChangedCallback<unknown>,
    ]);
  }

  public async callService<F>(domain: string, service: string, fields?: F) {
    await this.hassApi.websocket.callService(domain, service, fields);
  }

  public removeStateChangedCallback<S>(
    entityId: string,
    callback: StateChangedCallback<S>
  ) {
    const storedCallbacks = this.stateChangedCallbacks.get(entityId);
    if (storedCallbacks) {
      const index = storedCallbacks.findIndex((needle) => needle === callback);
      this.stateChangedCallbacks.set(
        entityId,
        removeItemAtIndex(storedCallbacks, index)
      );
    }
  }

  public removeOnStateLoadedCallback<S>(
    entityId: string,
    callback: StateLoadCallback<S>
  ) {
    const storedCallbacks = this.stateLoadCallbacks.get(entityId);
    if (storedCallbacks) {
      const index = storedCallbacks.findIndex((needle) => needle === callback);
      this.stateLoadCallbacks.set(
        entityId,
        removeItemAtIndex(storedCallbacks, index)
      );
    }
  }

  public cachedStates() {
    return this.states;
  }

  private stateChangedListener(event: StateChangedEvent) {
    const callbacks = this.stateChangedCallbacks.get(event.data.entity_id);
    callbacks?.forEach((callback) => {
      callback(event.data.old_state, event.data.new_state);
    });
  }

  private parseState(state: RawState): State {
    return {
      ...state,
      last_changed: new Date(state.last_changed),
      last_updated: new Date(state.last_updated),
    };
  }

  private async loadStates() {
    this.logger.debug(`Loading states`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const states: RawState[] = await this.hassApi.websocket.getStates();
    const stateMap = new Map<string, State>();
    states
      .map((state) => this.parseState(state))
      .forEach((state) => {
        stateMap.set(state.entity_id, state);
        const callbacks = this.stateLoadCallbacks.get(state.entity_id);
        callbacks?.forEach((callback) => {
          callback(state);
        });
      });

    this.logger.debug(`Finished loading states`);
    this.states = stateMap;
  }

  private async init() {
    await this.hassApi.init();
    this.hassApi.websocket.on("state_changed", (event: StateChangedEvent) => {
      try {
        this.stateChangedListener(event);
      } catch (error) {
        if (error instanceof Error) {
          this.logger.error(error);
        }
      }
    });
    await this.loadStates();
    this.logger.info("Hass client initialised");
  }
}
