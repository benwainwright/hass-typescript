import { ClimateState } from "./states/index.js";

export interface EntityMap {
  climate: {
    id: `climate.${string}`;
    state: ClimateState;
  };
}
