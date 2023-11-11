import { Entity } from "./entity.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetIdTypes<T extends abstract new (...args: any[]) => unknown> =
  T extends unknown ? ConstructorParameters<T>[0] : never;

export type IdType = GetIdTypes<Entity>;
