import * as entities from "@entities";

const entityList = Object.entries(entities).map(([, entity]) => entity);

export type EntityList = InstanceType<(typeof entityList)[number]>;

export type IdType = EntityList["id"];

export type ExcludeWithId<T extends IdType, L extends EntityList> = L extends {
  id: `${GetDomain<T>}.${string}`;
}
  ? L
  : never;

export type GetDomain<T extends IdType> = T extends `${infer Domain extends
  string}.${string}`
  ? Domain
  : never;

export type Entities<T extends Record<keyof T, IdType>> = {
  [K in keyof T]: EntityType<T[K]>;
};

export type EntityType<T extends IdType> = ExcludeWithId<T, EntityList>;
