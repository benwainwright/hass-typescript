## API Report File for "rtm-typescript"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export interface IClient {
    [Symbol.dispose](): void;
    // Warning: (ae-forgotten-export) The symbol "State" needs to be exported by the entry point index.d.ts
    cachedStates(): Map<string, State>;
    callService<F>(domain: string, service: string, fields: F): Promise<void>;
    close(): void;
    // Warning: (ae-forgotten-export) The symbol "Entities" needs to be exported by the entry point index.d.ts
    getEntities<T extends Record<string, IdType>>(ids: T): Entities<T>;
    // Warning: (ae-forgotten-export) The symbol "IdType" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "EntityType" needs to be exported by the entry point index.d.ts
    getEntity<T extends IdType>(id: T): EntityType<T>;
    onStateChanged<S>(entityId: string, callback: StateChangedCallback<S>): void;
    removeStateChangedCallback<S>(entityId: string, callback: StateChangedCallback<S>): void;
    setState<I extends IdType, S>(entityId: I, state: S): Promise<unknown>;
}

// Warning: (ae-forgotten-export) The symbol "HassConfig" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "Logger" needs to be exported by the entry point index.d.ts
//
// @public
export const initialiseClient: (config: HassConfig, logger: Logger) => Promise<IClient>;

// @public (undocumented)
export type StateChangedCallback<S> = (oldState: S, newState: S) => void;

// @public (undocumented)
export type StateLoadCallback<S> = (state: S) => void;

// (No @packageDocumentation comment for this package)

```
