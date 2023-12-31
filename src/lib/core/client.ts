import {
  HassConfig,
  Logger,
  RawState,
  State,
  StateChangedEvent,
  Entities,
  EntityType,
  IdType,
  IClient,
  StateLoadCallback,
  StateChangedCallback,
} from "@types";
import { removeItemAtIndex } from "@utils";
import { Calendar, Climate } from "@entities";

import { FIVE_MINUTES } from "./constants.js";
import { HomeAssistantApi } from "./home-assistant-api.js";

export class Client implements IClient {
  private entities: Record<IdType, unknown> = {};
  private hassApi: HomeAssistantApi;
  private states: Map<string, State> = new Map<string, State>();
  private timers: NodeJS.Timeout[] = [];

  private stateLoadCallbacks: Map<string, StateLoadCallback<unknown>[]> =
    new Map<string, StateLoadCallback<unknown>[]>();

  private stateChangedCallbacks: Map<string, StateChangedCallback<unknown>[]> =
    new Map<string, StateChangedCallback<unknown>[]>();

  /**
   * Create a new Hass client instance.
   */
  public static async start(config: HassConfig, logger: Logger) {
    const client = new Client(config, logger);
    await client.init();
    return client;
  }

  public getEntity<T extends IdType>(id: T): EntityType<T> {
    if (id in this.entities) {
      return this.entities[id] as EntityType<T>;
    }

    if (Climate.isId(id)) {
      const climate = new Climate<`climate.${string}`>(
        id,
        this
      ) as EntityType<T>;

      this.entities[id] = climate;
      return climate;
    }

    if (Calendar.isId(id)) {
      const calendar = new Calendar<`calendar.${string}`>(
        id,
        this
      ) as EntityType<T>;
      this.entities[id] = calendar;
      return calendar;
    }

    throw new Error("Unrecognised ID");
  }

  public getEntities<T extends Record<string, IdType>>(ids: T): Entities<T> {
    return Object.fromEntries(
      Object.entries(ids).map(([key, value]) => [key, this.getEntity(value)])
    ) as Entities<T>;
  }

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

  private stateChangedListener(event: StateChangedEvent) {
    const callbacks = this.stateChangedCallbacks.get(event.data.entity_id);
    callbacks?.forEach((callback) => {
      callback(event.data.old_state, event.data.new_state);
    });
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

  public close() {
    this.hassApi.close();
    this.timers.forEach((timer) => {
      clearInterval(timer);
    });
    this.logger.info(`Hass client closed`);
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

  public cachedStates() {
    return this.states;
  }
}
