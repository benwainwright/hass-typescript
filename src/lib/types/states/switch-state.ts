import { BaseState } from "../base-state.js";

export interface SwitchState extends BaseState {
  entity_id: `switch.${string}`;
  state: "on" | "off";
  attributes?: Partial<{
    icon: string;
    friendly_name: string;
  }>;
}
