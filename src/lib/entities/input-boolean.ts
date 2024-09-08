import { BaseEntity, Client, assertIdMatchesDomain } from "@core";
import { InputBooleanState } from "@types";

export const ENTITY_DOMAIN_STRING = "input_boolean";

interface InputBooleanServiceMap {
  turn_on: {
    entity_id?: string;
    area_id?: string;
  };
  turn_off: {
    entity_id?: string;
    area_id?: string;
  };
  toggle: {
    entity_id?: string;
    area_id?: string;
  };
  reload: Record<string, never>;
}

type StateChangeCallback = (
  oldState: InputBooleanState,
  newState: InputBooleanState
) => void;

export class InputBoolean<
  I extends `${typeof ENTITY_DOMAIN_STRING}.${string}`,
> {
  private entity: BaseEntity<I, InputBooleanState, InputBooleanServiceMap>;

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
  ): InputBoolean<`input_boolean.${string}`> {
    assertIdMatchesDomain(id, "input_boolean");
    return new InputBoolean(id, client);
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
