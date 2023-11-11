[rtm-typescript](../README.md) / InputBooleanState

# Interface: InputBooleanState

## Hierarchy

- [`BaseState`](BaseState.md)

  ↳ **`InputBooleanState`**

## Table of contents

### Properties

- [attributes](InputBooleanState.md#attributes)
- [context](InputBooleanState.md#context)
- [entity\_id](InputBooleanState.md#entity_id)
- [last\_changed](InputBooleanState.md#last_changed)
- [last\_updated](InputBooleanState.md#last_updated)
- [state](InputBooleanState.md#state)

## Properties

### attributes

• `Optional` **attributes**: `Partial`\<\{ `friendly_name`: `string` ; `icon`: `string`  }\>

Attributes of the current state

#### Overrides

[BaseState](BaseState.md).[attributes](BaseState.md#attributes)

#### Defined in

lib/types/states/input-boolean-state.ts:9

___

### context

• `Optional` **context**: [`StateContext`](StateContext.md)

The context of the state change - see [https://data.home-assistant.io/docs/context/#:~:text=Context%20is%20used%20to%20tie,as%20result%20of%20the%20change.](https://data.home-assistant.io/docs/context/#:~:text=Context%20is%20used%20to%20tie,as%20result%20of%20the%20change.)

#### Inherited from

[BaseState](BaseState.md).[context](BaseState.md#context)

#### Defined in

lib/types/base-state.ts:37

___

### entity\_id

• **entity\_id**: \`input\_boolean..$\{string}\`

The id of the entity that this state change is for

#### Overrides

[BaseState](BaseState.md).[entity_id](BaseState.md#entity_id)

#### Defined in

lib/types/states/input-boolean-state.ts:7

___

### last\_changed

• `Optional` **last\_changed**: `Date`

The last time the state was changed

#### Inherited from

[BaseState](BaseState.md).[last_changed](BaseState.md#last_changed)

#### Defined in

lib/types/base-state.ts:27

___

### last\_updated

• `Optional` **last\_updated**: `Date`

The last time the state was updated

#### Inherited from

[BaseState](BaseState.md).[last_updated](BaseState.md#last_updated)

#### Defined in

lib/types/base-state.ts:32

___

### state

• **state**: ``"on"`` \| ``"off"``

The state value

#### Overrides

[BaseState](BaseState.md).[state](BaseState.md#state)

#### Defined in

lib/types/states/input-boolean-state.ts:8
