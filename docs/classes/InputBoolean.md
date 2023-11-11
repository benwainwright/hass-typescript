[rtm-typescript](../README.md) / InputBoolean

# Class: InputBoolean\<I\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends \`input\_boolean.$\{string}\` |

## Table of contents

### Accessors

- [state](InputBoolean.md#state)

### Constructors

- [constructor](InputBoolean.md#constructor)

### Methods

- [onStateChange](InputBoolean.md#onstatechange)
- [toggle](InputBoolean.md#toggle)
- [turnOff](InputBoolean.md#turnoff)
- [turnOn](InputBoolean.md#turnon)
- [isId](InputBoolean.md#isid)

### Properties

- [entity](InputBoolean.md#entity)
- [id](InputBoolean.md#id)

## Accessors

### state

• `get` **state**(): [`InputBooleanState`](../interfaces/InputBooleanState.md)

#### Returns

[`InputBooleanState`](../interfaces/InputBooleanState.md)

#### Defined in

lib/entities/input-boolean.ts:45

## Constructors

### constructor

• **new InputBoolean**\<`I`\>(`id`, `client`): [`InputBoolean`](InputBoolean.md)\<`I`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends \`input\_boolean.$\{string}\` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `I` |
| `client` | `Client` |

#### Returns

[`InputBoolean`](InputBoolean.md)\<`I`\>

#### Defined in

lib/entities/input-boolean.ts:28

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

lib/entities/input-boolean.ts:61

___

### toggle

▸ **toggle**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/input-boolean.ts:55

___

### turnOff

▸ **turnOff**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/input-boolean.ts:49

___

### turnOn

▸ **turnOn**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/input-boolean.ts:39

___

### isId

▸ **isId**(`id`): id is \`input\_boolean.$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdType`](../README.md#idtype) |

#### Returns

id is \`input\_boolean.$\{string}\`

#### Defined in

lib/entities/input-boolean.ts:35

## Properties

### entity

• `Private` **entity**: `BaseEntity`\<`I`, [`InputBooleanState`](../interfaces/InputBooleanState.md), `InputBooleanServiceMap`\>

#### Defined in

lib/entities/input-boolean.ts:26

___

### id

• `Private` **id**: `I`

#### Defined in

lib/entities/input-boolean.ts:29
