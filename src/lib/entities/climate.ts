import { Client, BaseEntity, assertIdMatchesDomain } from "@core";
import { ClimateState } from "@types";

type StateChangeCallback = (
  oldState: ClimateState,
  newState: ClimateState
) => void;

type SetTemperatureArgs = {
  temperature?: number;
  target_temp_high?: number;
  target_temp_low?: number;
  hvac_mode?: string;
};

export type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T;

interface ClimateCommandMap {
  set_hvac_mode: {
    entity_id?: string;
    hvac_mode: string;
  };
  set_preset_mode: {
    entity_id?: string;
    preset_mode: string;
  };
  set_aux_heat: {
    entity_id?: string;
    aux_heat: string;
  };
  set_temperature: {
    entity_id?: string;
    temperature?: number;
    target_temp_high?: number;
    target_temp_low?: number;
    hvac_mode?: string;
  };
}

export class Climate<I extends `${typeof Climate.domain}.${string}`> {
  static readonly domain = "climate";

  private entity: BaseEntity<I, ClimateState, ClimateCommandMap>;

  constructor(
    public id: I,
    client: Client
  ) {
    this.entity = new BaseEntity(id, client);
  }

  public get state(): ClimateState {
    return this.entity.state;
  }

  public static make<I extends string>(
    id: I,
    client: Client
  ): Climate<`climate.${string}`> {
    assertIdMatchesDomain(id, "climate");
    return new Climate(id, client);
  }

  public async setTemperature(args: SetTemperatureArgs) {
    await this.entity.callService("set_temperature", {
      ...args,
      entity_id: this.id,
    });
  }

  public async setAuxHeat(auxHeat: string) {
    await this.entity.callService("set_aux_heat", {
      entity_id: this.id,
      aux_heat: auxHeat,
    });
  }

  public async setHvacMode(mode: string) {
    await this.entity.callService("set_hvac_mode", {
      entity_id: this.id,
      hvac_mode: mode,
    });
  }

  public async setPresetMode(mode: string) {
    await this.entity.callService("set_preset_mode", {
      entity_id: this.id,
      preset_mode: mode,
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
