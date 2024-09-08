import { IdType } from "../index.js";
import { GetDomain } from "../types/entity-type.js";

export const assertIdMatchesDomain: <D extends GetDomain<IdType>>(
  id: string,
  domain: D
) => asserts id is `${D}.${string}` = (id, domain) => {
  if (!id.startsWith(domain)) {
    throw new Error(`id ${id} does not match domain ${domain}`);
  }
};
