import { Calendar } from "./calendar.js";
import { Climate } from "./climate.js";
import { Switch } from "./switch.js";
import { Light } from "./light.js";
import { InputBoolean } from "./input-boolean.js";

const entities = {
  calendar: Calendar<`calendar.${string}`>,
  climate: Climate<`climate.${string}`>,
  switch: Switch<`switch.${string}`>,
  light: Light<`light.${string}`>,
  input_boolean: InputBoolean<`input_boolean.${string}`>,
};


export const entityMap = Object.values(entities);
export default entityMap;
