import { State } from "./state.js";

export type RawState = State & {
  last_changed: string;
  last_updated: string;
};
