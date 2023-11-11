import { StateContext } from "./state-context.js";

export interface BaseState {
  entity_id: string;
  state: string;
  attributes?: Record<string, string | number | boolean | string[]>;
  last_changed?: Date;
  last_updated?: Date;
  context?: StateContext;
}
