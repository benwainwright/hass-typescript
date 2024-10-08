import { HassConfig } from "@types";

type HttpMethod = "GET" | "POST";

export class HomeAssistantHttpApi {
  public constructor(private hassConfig: HassConfig) {}

  public async get<T>(path: string) {
    return await this.request<T, Record<string, never>>("GET", path);
  }

  public async post<T, B>(path: string, body: B) {
    return await this.request<T, B>("POST", path, body);
  }

  private async request<T, B>(method: HttpMethod, path: string, body?: B) {
    const normalisedHost = this.hassConfig.host.endsWith("/")
      ? this.hassConfig.host.slice(0, -1)
      : this.hassConfig.host;

    const normalisedPath = path.startsWith("/") ? path.slice(1) : path;

    const url = `http://${normalisedHost}${this.hassConfig.httpPath}/${normalisedPath}`;
    const params = {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${this.hassConfig.token}`,
      },
    };

    const response = await fetch(url, params);
    return (await response.json()) as T;
  }
}
