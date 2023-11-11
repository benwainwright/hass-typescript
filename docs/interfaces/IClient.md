[rtm-typescript](../README.md) / IClient

# Interface: IClient

The Home Assistant client interface

## Table of contents

### Methods

- [[dispose]](IClient.md#[dispose])
- [cachedStates](IClient.md#cachedstates)
- [callService](IClient.md#callservice)
- [close](IClient.md#close)
- [getEntities](IClient.md#getentities)
- [getEntity](IClient.md#getentity)
- [onStateChanged](IClient.md#onstatechanged)
- [removeStateChangedCallback](IClient.md#removestatechangedcallback)
- [setState](IClient.md#setstate)

## Methods

### [dispose]

▸ **[dispose]**(): `void`

Allows you to use the 'using' keyword with this object. See [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html#using-declarations-and-explicit-resource-management](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html#using-declarations-and-explicit-resource-management)

#### Returns

`void`

#### Defined in

lib/types/i-client.ts:85

___

### cachedStates

▸ **cachedStates**(): `Map`\<`string`, `State`\>

Returns a map of all the states that have been loaded so far

#### Returns

`Map`\<`string`, `State`\>

#### Defined in

lib/types/i-client.ts:80

___

### callService

▸ **callService**\<`F`\>(`domain`, `service`, `fields`): `Promise`\<`void`\>

Call a Home Assistant service

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `domain` | `string` | the domain of the service |
| `service` | `string` | the service name |
| `fields` | `F` | any fields you wish to pass to the service |

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/types/i-client.ts:59

___

### close

▸ **close**(): `void`

Closes the connection to Home Assistant

#### Returns

`void`

#### Defined in

lib/types/i-client.ts:75

___

### getEntities

▸ **getEntities**\<`T`\>(`ids`): `Entities`\<`T`\>

Return a map of entity objects for the given ids. Entities
will be correctly typed based on their id string

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `IdType`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `T` | Map of entities |

#### Returns

`Entities`\<`T`\>

**`Example`**

```TypeScript
const { climate, calendar } = client.getEntities({
  climate: "climate.my_climate",
  calendar: "calendar.my_calendar"
});
```

#### Defined in

lib/types/i-client.ts:34

___

### getEntity

▸ **getEntity**\<`T`\>(`id`): `EntityType`\<`T`\>

Get an entity object for a given id

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IdType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `T` | the entity id string |

#### Returns

`EntityType`\<`T`\>

#### Defined in

lib/types/i-client.ts:18

___

### onStateChanged

▸ **onStateChanged**\<`S`\>(`entityId`, `callback`): `void`

Add a callback that fires every time the state of an entity changes

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | the id of the entity to watch |
| `callback` | [`StateChangedCallback`](../README.md#statechangedcallback)\<`S`\> | the callback to trigger when the state changes |

#### Returns

`void`

#### Defined in

lib/types/i-client.ts:50

___

### removeStateChangedCallback

▸ **removeStateChangedCallback**\<`S`\>(`entityId`, `callback`): `void`

Remove a callback that you previously registered

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | entity id associated with the callback |
| `callback` | [`StateChangedCallback`](../README.md#statechangedcallback)\<`S`\> | the callback that you previously registered |

#### Returns

`void`

#### Defined in

lib/types/i-client.ts:67

___

### setState

▸ **setState**\<`I`, `S`\>(`entityId`, `state`): `Promise`\<`unknown`\>

Set the state of a given entity

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `IdType` |
| `S` | `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `I` |
| `state` | `S` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

lib/types/i-client.ts:42
