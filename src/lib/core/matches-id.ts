import { EntityType, IdType } from "@types";

export const matchesId = <ET extends T, T extends IdType>(
  entity: unknown,
  entityId: T,
  testId: ET,
): entity is EntityType<ET> => {
  return entityId === testId;
};
