[rtm-typescript](../README.md) / Switch

# Class: Switch\<I\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends \`switch.$\{string}\` |

## Table of contents

### Accessors

- [state](Switch.md#state)

### Constructors

- [constructor](Switch.md#constructor)

### Methods

- [onStateChange](Switch.md#onstatechange)
- [toggle](Switch.md#toggle)
- [turnOff](Switch.md#turnoff)
- [turnOn](Switch.md#turnon)
- [isId](Switch.md#isid)

### Properties

- [entity](Switch.md#entity)
- [id](Switch.md#id)

## Accessors

### state

• `get` **state**(): [`SwitchState`](../interfaces/SwitchState.md)

#### Returns

[`SwitchState`](../interfaces/SwitchState.md)

#### Defined in

lib/entities/switch.ts:38

## Constructors

### constructor

• **new Switch**\<`I`\>(`id`, `client`): [`Switch`](Switch.md)\<`I`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends \`switch.$\{string}\` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `I` |
| `client` | `Client` |

#### Returns

[`Switch`](Switch.md)\<`I`\>

#### Defined in

lib/entities/switch.ts:24

## Methods

### onStateChange

▸ **onStateChange**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `StateChangeCallback` |

#### Returns

`void`

#### Defined in

lib/entities/switch.ts:54

___

### toggle

▸ **toggle**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/switch.ts:48

___

### turnOff

▸ **turnOff**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/switch.ts:42

___

### turnOn

▸ **turnOn**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/switch.ts:32

___

### isId

▸ **isId**(`id`): id is \`switch.$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdType`](../README.md#idtype) |

#### Returns

id is \`switch.$\{string}\`

#### Defined in

lib/entities/switch.ts:28

## Properties

### entity

• `Private` **entity**: `BaseEntity`\<`I`, [`SwitchState`](../interfaces/SwitchState.md), `SwitchServiceMap`\>

#### Defined in

lib/entities/switch.ts:22

___

### id

• `Private` **id**: `I`

#### Defined in

lib/entities/switch.ts:24
