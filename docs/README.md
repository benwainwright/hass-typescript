rtm-typescript

# rtm-typescript

## Table of contents

### Functions

- [initialiseClient](README.md#initialiseclient)

### Interfaces

- [BaseState](interfaces/BaseState.md)
- [CalendarEvent](interfaces/CalendarEvent.md)
- [CalendarState](interfaces/CalendarState.md)
- [CalendarStateAttributes](interfaces/CalendarStateAttributes.md)
- [ClimateState](interfaces/ClimateState.md)
- [HassConfig](interfaces/HassConfig.md)
- [IClient](interfaces/IClient.md)
- [InputBooleanState](interfaces/InputBooleanState.md)
- [LightState](interfaces/LightState.md)
- [Logger](interfaces/Logger.md)
- [StateContext](interfaces/StateContext.md)
- [SwitchState](interfaces/SwitchState.md)

### Classes

- [Calendar](classes/Calendar.md)
- [Climate](classes/Climate.md)
- [InputBoolean](classes/InputBoolean.md)
- [Light](classes/Light.md)
- [Switch](classes/Switch.md)

### Type Aliases

- [Entity](README.md#entity)
- [EntityType](README.md#entitytype)
- [EntityWithMatchingId](README.md#entitywithmatchingid)
- [IdType](README.md#idtype)
- [MatchesId](README.md#matchesid)
- [State](README.md#state)
- [StateChangedCallback](README.md#statechangedcallback)
- [StateLoadCallback](README.md#stateloadcallback)

## Functions

### initialiseClient

▸ **initialiseClient**(`config`, `logger`): `Promise`\<[`IClient`](interfaces/IClient.md)\>

Initialise an instance of the home assistant client and connect to your server

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`HassConfig`](interfaces/HassConfig.md) | Configuration for the client |
| `logger` | [`Logger`](interfaces/Logger.md) | A logger instance |

#### Returns

`Promise`\<[`IClient`](interfaces/IClient.md)\>

#### Defined in

lib/core/initialise-client.ts:12

## Type Aliases

### Entity

Ƭ **Entity**: typeof [`Calendar`](classes/Calendar.md) \| typeof [`Climate`](classes/Climate.md) \| typeof [`Switch`](classes/Switch.md) \| typeof [`InputBoolean`](classes/InputBoolean.md)

#### Defined in

lib/types/entity.ts:5

___

### EntityType

Ƭ **EntityType**\<`T`\>: [`EntityWithMatchingId`](README.md#entitywithmatchingid)\<`T`, [`Entity`](README.md#entity)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IdType`](README.md#idtype) |

#### Defined in

lib/types/entity-type.ts:15

___

### EntityWithMatchingId

Ƭ **EntityWithMatchingId**\<`T`, `Y`\>: `Y` extends [`MatchesId`](README.md#matchesid)\<`T`, `Y`\> ? `InstanceType`\<`Y`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IdType`](README.md#idtype) |
| `Y` | extends (...`args`: `any`[]) => `unknown` |

#### Defined in

lib/types/entity-type.ts:9

___

### IdType

Ƭ **IdType**: `GetIdTypes`\<[`Entity`](README.md#entity)\>

#### Defined in

lib/types/id-type.ts:7

___

### MatchesId

Ƭ **MatchesId**\<`T`, `Y`\>: `T` extends `ConstructorParameters`\<`Y`\>[``0``] ? `Y` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IdType`](README.md#idtype) |
| `Y` | extends (...`args`: `unknown`[]) => `unknown` |

#### Defined in

lib/types/entity-type.ts:4

___

### State

Ƭ **State**: [`CalendarState`](interfaces/CalendarState.md) \| [`LightState`](interfaces/LightState.md) \| [`ClimateState`](interfaces/ClimateState.md) \| [`SwitchState`](interfaces/SwitchState.md) \| [`InputBooleanState`](interfaces/InputBooleanState.md)

The state of an entity

#### Defined in

lib/types/state.ts:15

___

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

lib/types/state-callbacks.ts:9

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

lib/types/state-callbacks.ts:4
