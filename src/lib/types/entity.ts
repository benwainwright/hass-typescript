import { Calendar, Climate, InputBoolean, Switch } from "@entities";
import { IdType } from "./id-type.js";
import { EntityType } from "./entity-type.js";

export type Entity =
  | typeof Calendar<`calendar.${string}`>
  | typeof Climate<`climate.${string}`>
  | typeof Switch<`switch.${string}`>
  | typeof InputBoolean<`input_boolean.${string}`>;

export declare type Entities<T extends Record<string, IdType>> = {
  [K in keyof T]: EntityType<T[K]>;
};
