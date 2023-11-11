[rtm-typescript](../README.md) / BaseState

# Interface: BaseState

Properties common to all states

## Hierarchy

- **`BaseState`**

  ↳ [`CalendarState`](CalendarState.md)

  ↳ [`ClimateState`](ClimateState.md)

  ↳ [`InputBooleanState`](InputBooleanState.md)

  ↳ [`LightState`](LightState.md)

  ↳ [`SwitchState`](SwitchState.md)

## Table of contents

### Properties

- [attributes](BaseState.md#attributes)
- [context](BaseState.md#context)
- [entity\_id](BaseState.md#entity_id)
- [last\_changed](BaseState.md#last_changed)
- [last\_updated](BaseState.md#last_updated)
- [state](BaseState.md#state)

## Properties

### attributes

• `Optional` **attributes**: `Record`\<`string`, `string` \| `number` \| `boolean` \| `string`[]\>

Attributes of the current state

#### Defined in

lib/types/base-state.ts:22

___

### context

• `Optional` **context**: [`StateContext`](StateContext.md)

The context of the state change - see [https://data.home-assistant.io/docs/context/#:~:text=Context%20is%20used%20to%20tie,as%20result%20of%20the%20change.](https://data.home-assistant.io/docs/context/#:~:text=Context%20is%20used%20to%20tie,as%20result%20of%20the%20change.)

#### Defined in

lib/types/base-state.ts:37

___

### entity\_id

• **entity\_id**: `string`

The id of the entity that this state change is for

#### Defined in

lib/types/base-state.ts:12

___

### last\_changed

• `Optional` **last\_changed**: `Date`

The last time the state was changed

#### Defined in

lib/types/base-state.ts:27

___

### last\_updated

• `Optional` **last\_updated**: `Date`

The last time the state was updated

#### Defined in

lib/types/base-state.ts:32

___

### state

• **state**: `string`

The state value

#### Defined in

lib/types/base-state.ts:17
