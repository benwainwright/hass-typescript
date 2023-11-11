import { Entity } from "./entity.js";
import { IdType } from "./id-type.js";

type MatchesId<
  T extends IdType,
  Y extends abstract new (...args: unknown[]) => unknown,
> = T extends ConstructorParameters<Y>[0] ? Y : never;

type EntityWithMatchingId<
  T extends IdType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Y extends abstract new (...args: any[]) => unknown,
> = Y extends MatchesId<T, Y> ? InstanceType<Y> : never;

export type EntityType<T extends IdType> = EntityWithMatchingId<T, Entity>;
