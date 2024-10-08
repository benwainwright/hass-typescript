import { hass } from "./homeassistant-ws.js";
import { HassApi, HassWsOptions } from "homeassistant-ws";
import WebSocket from "isomorphic-ws";
import { HassConfig } from "@types";
import { HomeAssistantHttpApi } from "./home-assistant-http-api.js";

export class HomeAssistantApi {
  private hassApi: HassApi | undefined;
  private httpClient: HomeAssistantHttpApi;

  public constructor(private hassConfig: HassConfig) {
    this.httpClient = new HomeAssistantHttpApi(this.hassConfig);
  }

  public get http() {
    return this.httpClient;
  }

  public get websocket() {
    if (!this.hassApi) {
      throw new Error("Hass API has not been initialised. Please call .init()");
    }

    return this.hassApi;
  }

  public close() {
    this.hassApi = undefined;
  }

  public async init() {
    if (!this.hassApi) {
      const ws = !this.hassConfig.port
        ? {
            ws: (opts: HassWsOptions) => {
              return new WebSocket(
                `${opts.protocol}://${opts.host}${opts.path}`
              );
            },
          }
        : {};

      this.hassApi = await hass({
        host: this.hassConfig.host,
        token: this.hassConfig.token,
        port: this.hassConfig.port,
        path: this.hassConfig.websocketPath,
        ...ws,
      });
    }
  }
}
