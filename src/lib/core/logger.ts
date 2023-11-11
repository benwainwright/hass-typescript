import { Logger as TsLogger } from "tslog";
import { APP_NAME } from "./constants.js";

export const logger = new TsLogger({ name: APP_NAME });
