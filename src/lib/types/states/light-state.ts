import { BaseState } from "../base-state.js";

/**
 * @public
 */
export interface LightState extends BaseState {
  entity_id: `light.${string}`;
}
