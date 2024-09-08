import { mock } from "vitest-mock-extended";
import { Client } from "../core/client.js";
import { Climate } from "./climate.js";
import { ClimateState } from "../index.js";
describe("climate", () => {
  it("calls the set temperature service when setTemperature is called", async () => {
    const client = mock<Client>();
    const states = new Map<string, ClimateState>();

    states.set("climate.foo", {
      state: "off",
      entity_id: "climate.foo",
    });

    client.cachedStates.mockReturnValue(states);
    const climate = new Climate("climate.foo", client);

    await climate.setTemperature({
      temperature: 100,
      target_temp_high: 105,
      target_temp_low: 95,
      hvac_mode: "off",
    });

    expect(client.callService).toHaveBeenCalledWith(
      "climate",
      "set_temperature",
      {
        entity_id: "climate.foo",
        temperature: 100,
        target_temp_high: 105,
        target_temp_low: 95,
        hvac_mode: "off",
      }
    );
  });
});
