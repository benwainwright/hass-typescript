import { EntityType } from "./entity-type.js";
import { Entities } from "./entity.js";
import { IdType } from "./id-type.js";
import { StateChangedCallback } from "./state-callbacks.js";
import { State } from "./state.js";

/**
 * The Home Assistant client interface
 *
 * @public
 */
export interface IClient {
  /**
   * Get an entity object for a given id
   *
   * @param id - the entity id string
   */
  getEntity<T extends IdType>(id: T): EntityType<T>;

  /**
   * Return a map of entity objects for the given ids. Entities
   * will be correctly typed based on their id string
   *
   * @example
   * ```TypeScript
   * const { climate, calendar } = client.getEntities({
   *   climate: "climate.my_climate",
   *   calendar: "calendar.my_calendar"
   * });
   * ```
   *
   * @param ids - Map of entities
   */
  getEntities<T extends Record<string, IdType>>(ids: T): Entities<T>;

  /**
   * Set the state of a given entity
   *
   * @param entityId
   * @param state
   */
  setState<I extends IdType, S>(entityId: I, state: S): Promise<unknown>;

  /**
   * Add a callback that fires every time the state of an entity changes
   *
   * @param entityId - the id of the entity to watch
   * @param callback - the callback to trigger when the state changes
   */
  onStateChanged<S>(entityId: string, callback: StateChangedCallback<S>): void;

  /**
   * Call a Home Assistant service
   *
   * @param domain - the domain of the service
   * @param service - the service name
   * @param fields - any fields you wish to pass to the service
   */
  callService<F>(domain: string, service: string, fields: F): Promise<void>;

  /**
   * Remove a callback that you previously registered
   *
   * @param entityId - entity id associated with the callback
   * @param callback - the callback that you previously registered
   */
  removeStateChangedCallback<S>(
    entityId: string,
    callback: StateChangedCallback<S>
  ): void;

  /**
   * Closes the connection to Home Assistant
   */
  close(): void;

  /**
   * Returns a map of all the states that have been loaded so far
   */
  cachedStates(): Map<string, State>;

  /**
   * Allows you to use the 'using' keyword with this object. See {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html#using-declarations-and-explicit-resource-management}
   */
  [Symbol.dispose](): void;
}
