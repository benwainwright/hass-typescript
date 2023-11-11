[rtm-typescript](../README.md) / Calendar

# Class: Calendar\<I\>

represents a set of events with a start and end date and/or time. See [https://developers.home-assistant.io/docs/core/entity/calendar](https://developers.home-assistant.io/docs/core/entity/calendar)

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends \`calendar.$\{string}\` |

## Table of contents

### Accessors

- [currentEvent](Calendar.md#currentevent)

### Constructors

- [constructor](Calendar.md#constructor)

### Methods

- [isEventCurrentlyHappening](Calendar.md#iseventcurrentlyhappening)
- [onFinishEvent](Calendar.md#onfinishevent)
- [onStartEvent](Calendar.md#onstartevent)
- [parseAttributes](Calendar.md#parseattributes)
- [isId](Calendar.md#isid)

### Properties

- [entity](Calendar.md#entity)
- [id](Calendar.md#id)

## Accessors

### currentEvent

• `get` **currentEvent**(): [`CalendarEvent`](../interfaces/CalendarEvent.md)

#### Returns

[`CalendarEvent`](../interfaces/CalendarEvent.md)

#### Defined in

lib/entities/calendar.ts:28

## Constructors

### constructor

• **new Calendar**\<`I`\>(`id`, `client`): [`Calendar`](Calendar.md)\<`I`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends \`calendar.$\{string}\` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `I` |
| `client` | `Client` |

#### Returns

[`Calendar`](Calendar.md)\<`I`\>

#### Defined in

lib/entities/calendar.ts:13

## Methods

### isEventCurrentlyHappening

▸ **isEventCurrentlyHappening**(): `boolean`

#### Returns

`boolean`

#### Defined in

lib/entities/calendar.ts:24

___

### onFinishEvent

▸ **onFinishEvent**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `FinishEventCallback` |

#### Returns

`void`

#### Defined in

lib/entities/calendar.ts:58

___

### onStartEvent

▸ **onStartEvent**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `StartEventCallback` |

#### Returns

`void`

#### Defined in

lib/entities/calendar.ts:48

___

### parseAttributes

▸ **parseAttributes**(`attributes`): [`CalendarEvent`](../interfaces/CalendarEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `undefined` \| `Partial`\<[`CalendarStateAttributes`](../interfaces/CalendarStateAttributes.md)\> |

#### Returns

[`CalendarEvent`](../interfaces/CalendarEvent.md)

#### Defined in

lib/entities/calendar.ts:35

___

### isId

▸ **isId**(`id`): id is \`calendar.$\{string}\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IdType`](../README.md#idtype) |

#### Returns

id is \`calendar.$\{string}\`

#### Defined in

lib/entities/calendar.ts:20

## Properties

### entity

• `Private` **entity**: `BaseEntity`\<`I`, [`CalendarState`](../interfaces/CalendarState.md), `object`\>

#### Defined in

lib/entities/calendar.ts:11

___

### id

• `Private` **id**: `I`

#### Defined in

lib/entities/calendar.ts:14
