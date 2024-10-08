import { IdType } from "@types";
import { Client } from "./client.js";

export class BaseEntity<I extends IdType, S, SM = object> {
  private _state: S;
  private stateLoadedListener = this.onStateLoaded.bind(this);

  constructor(
    private id: I,
    private client: Client
  ) {
    this.client.onStateLoaded(this.id, this.stateLoadedListener);
    const state = this.client.cachedStates().get(this.id) as S | undefined;

    if (!state) {
      throw new Error(
        "State could not be loaded. That means either the entity id is wrong, or the client has not been initialised"
      );
    }

    console.log("TEST");

    this._state = state;

    this.client.onStateChanged<S>(id, (_, newState) => {
      console.log("TEST");
      this._state = newState;
    });
  }

  get state() {
    return this._state;
  }

  public async setState(state: Omit<S, "entity_id">) {
    return await this.client.setState(this.id, state);
  }

  public async callService<S extends keyof SM>(service: S, fields: SM[S]) {
    const [domain] = this.id.split(".");
    await this.client.callService(domain, service as string, fields);
  }

  public onStateChanged(callback: (oldState: S, newState: S) => void) {
    this.client.onStateChanged<S>(this.id, callback);
  }

  stateListener() {}

  private onStateLoaded(state: S) {
    this._state = state;
    this.client.removeOnStateLoadedCallback(this.id, this.stateLoadedListener);
  }
}
