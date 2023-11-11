rtm-typescript

# rtm-typescript

## Table of contents

### Functions

- [initialiseClient](README.md#initialiseclient)

### Interfaces

- [IClient](interfaces/IClient.md)

### Type Aliases

- [StateChangedCallback](README.md#statechangedcallback)
- [StateLoadCallback](README.md#stateloadcallback)

## Functions

### initialiseClient

▸ **initialiseClient**(`config`, `logger`): `Promise`\<[`IClient`](interfaces/IClient.md)\>

Initialise an instance of the home assistant client and connect to your server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `HassConfig` | Configuration for the client |
| `logger` | `Logger` | A logger instance |

#### Returns

`Promise`\<[`IClient`](interfaces/IClient.md)\>

#### Defined in

lib/core/initialise-client.ts:12

## Type Aliases

### StateChangedCallback

Ƭ **StateChangedCallback**\<`S`\>: (`oldState`: `S`, `newState`: `S`) => `void`

#### Type parameters

| Name |
| :------ |
| `S` |

#### Type declaration

▸ (`oldState`, `newState`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `oldState` | `S` |
| `newState` | `S` |

##### Returns

`void`

#### Defined in

lib/types/state-callbacks.ts:2

___

### StateLoadCallback

Ƭ **StateLoadCallback**\<`S`\>: (`state`: `S`) => `void`

#### Type parameters

| Name |
| :------ |
| `S` |

#### Type declaration

▸ (`state`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `S` |

##### Returns

`void`

#### Defined in

lib/types/state-callbacks.ts:1
