import { BaseState } from "../base-state.js";

export interface LightState extends BaseState {
  entity_id: `light.${string}`;
}
