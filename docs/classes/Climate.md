[rtm-typescript](../README.md) / Climate

# Class: Climate\<I\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends \`climate.$\{string}\` |

## Table of contents

### Accessors

- [state](Climate.md#state)

### Constructors

- [constructor](Climate.md#constructor)

### Methods

- [onStateChange](Climate.md#onstatechange)
- [setAuxHeat](Climate.md#setauxheat)
- [setHvacMode](Climate.md#sethvacmode)
- [setPresetMode](Climate.md#setpresetmode)
- [setTemperature](Climate.md#settemperature)
- [isId](Climate.md#isid)

### Properties

- [entity](Climate.md#entity)
- [id](Climate.md#id)

## Accessors

### state

• `get` **state**(): [`ClimateState`](../interfaces/ClimateState.md)

#### Returns

[`ClimateState`](../interfaces/ClimateState.md)

#### Defined in

lib/entities/climate.ts:54

## Constructors

### constructor

• **new Climate**\<`I`\>(`id`, `client`): [`Climate`](Climate.md)\<`I`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends \`climate.$\{string}\` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `I` |
| `client` | `Client` |

#### Returns

[`Climate`](Climate.md)\<`I`\>

#### Defined in

lib/entities/climate.ts:47

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

lib/entities/climate.ts:90

___

### setAuxHeat

▸ **setAuxHeat**(`auxHeat`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `auxHeat` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/climate.ts:69

___

### setHvacMode

▸ **setHvacMode**(`mode`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/climate.ts:76

___

### setPresetMode

▸ **setPresetMode**(`mode`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/climate.ts:83

___

### setTemperature

▸ **setTemperature**(`args`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `SetTemperatureArgs` |

#### Returns

`Promise`\<`void`\>

#### Defined in

lib/entities/climate.ts:62

___

### isId

▸ **isId**(`id`): id is \`climate.$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdType`](../README.md#idtype) |

#### Returns

id is \`climate.$\{string}\`

#### Defined in

lib/entities/climate.ts:58

## Properties

### entity

• `Private` **entity**: `BaseEntity`\<`I`, [`ClimateState`](../interfaces/ClimateState.md), `ClimateCommandMap`\>

#### Defined in

lib/entities/climate.ts:45

___

### id

• `Private` **id**: `I`

#### Defined in

lib/entities/climate.ts:48
