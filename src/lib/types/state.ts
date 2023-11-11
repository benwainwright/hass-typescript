import { Expand, IdType } from "@types";
import {
  CalendarState,
  ClimateState,
  LightState,
  SwitchState,
  InputBooleanState,
} from "./states/index.js";

export type State =
  | CalendarState
  | LightState
  | ClimateState
  | SwitchState
  | InputBooleanState;

type MatchingState<T extends IdType, S extends State> = S extends {
  entity_id: infer ID;
}
  ? T extends ID
    ? S
    : never
  : never;

export type StateForId<T extends IdType> = Expand<MatchingState<T, State>>;
