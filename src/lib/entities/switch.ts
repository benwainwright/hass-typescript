import { BaseEntity, Client, assertIdMatchesDomain } from "@core";
import { SwitchState } from "@types";

interface SwitchServiceMap {
  turn_on: {
    entity_id?: string;
  };
  turn_off: {
    entity_id?: string;
  };
  toggle: {
    entity_id?: string;
  };
}

type StateChangeCallback = (
  oldState: SwitchState,
  newState: SwitchState
) => void;

export const ENTITY_DOMAIN_STRING = "switch";

export class Switch<I extends `${typeof ENTITY_DOMAIN_STRING}.${string}`> {
  private entity: BaseEntity<I, SwitchState, SwitchServiceMap>;

  constructor(
    public readonly id: I,
    client: Client
  ) {
    this.entity = new BaseEntity(this.id, client);
  }

  public get state() {
    return this.entity.state;
  }

  public static make<I extends string>(
    id: I,
    client: Client
  ): Switch<`switch.${string}`> {
    assertIdMatchesDomain(id, "switch");
    return new Switch(id, client);
  }

  public async turnOn() {
    await this.entity.setState({
      state: "on",
    });
  }

  public async turnOff() {
    await this.entity.setState({
      state: "off",
    });
  }

  public async toggle() {
    await this.entity.callService("toggle", {
      entity_id: this.id,
    });
  }

  public onStateChange(callback: StateChangeCallback) {
    this.entity.onStateChanged((oldState, newState) => {
      if (oldState.entity_id === this.id && newState.entity_id === this.id) {
        callback(oldState, newState);
      }
    });
  }
}
