import { HassConfig, Logger } from "@types";
import { IClient } from "../types/i-client.js";
import { Client } from "./client.js";

/**
 * Initialise an instance of the home assistant client and connect to your server
 *
 * @param config - Configuration for the client
 * @param logger - A logger instance
 * @public
 */
export const initialiseClient = async (
  config: HassConfig,
  logger: Logger
): Promise<IClient> => {
  return await Client.start(config, logger);
};
