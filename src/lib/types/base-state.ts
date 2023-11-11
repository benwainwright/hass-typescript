import { StateContext } from "./state-context.js";

/**
 * Properties common to all states
 *
 * @public
 */
export interface BaseState {
  /**
   * The id of the entity that this state change is for
   */
  entity_id: string;

  /**
   * The state value
   */
  state: string;

  /**
   * Attributes of the current state
   */
  attributes?: Record<string, string | number | boolean | string[]>;

  /**
   * The last time the state was changed
   */
  last_changed?: Date;

  /**
   * The last time the state was updated
   */
  last_updated?: Date;

  /**
   * The context of the state change - see {@link https://data.home-assistant.io/docs/context/#:~:text=Context%20is%20used%20to%20tie,as%20result%20of%20the%20change.}
   */
  context?: StateContext;
}
