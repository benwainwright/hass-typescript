import { Client, assertIdMatchesDomain } from "@core";

export const ENTITY_DOMAIN_STRING = "light";
//
// eslint-disable-next-line @typescript-eslint/no-extraneous-class, @typescript-eslint/no-unused-vars
export class Light<T extends `light.${string}`> {
  public constructor(
    public readonly id: T,
    private client: Client
  ) {}

  public static make<I extends string>(
    id: I,
    client: Client
  ): Light<`light.${string}`> {
    assertIdMatchesDomain(id, "light");
    return new Light(id, client);
  }

  public turnOn() {}

  public turnOff() {}
}
