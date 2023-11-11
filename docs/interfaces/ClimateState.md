[rtm-typescript](../README.md) / ClimateState

# Interface: ClimateState

## Hierarchy

- [`BaseState`](BaseState.md)

  ↳ **`ClimateState`**

## Table of contents

### Properties

- [attributes](ClimateState.md#attributes)
- [context](ClimateState.md#context)
- [entity\_id](ClimateState.md#entity_id)
- [last\_changed](ClimateState.md#last_changed)
- [last\_updated](ClimateState.md#last_updated)
- [state](ClimateState.md#state)

## Properties

### attributes

• `Optional` **attributes**: `Partial`\<\{ `current_temperature`: `number` ; `friendly_name`: `string` ; `hvac_action`: `string` ; `hvac_modes`: `string`[] ; `icon`: `string` ; `max_temp`: `number` ; `min_temp`: `number` ; `preset_mode`: `string` ; `preset_modes`: `string`[] ; `supported_features`: `number` ; `target_temp_stemp`: `number` ; `temperature`: `number`  }\>

Attributes of the current state

#### Overrides

[BaseState](BaseState.md).[attributes](BaseState.md#attributes)

#### Defined in

lib/types/states/climate-state.ts:9

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

• **entity\_id**: \`climate.$\{string}\`

The id of the entity that this state change is for

#### Overrides

[BaseState](BaseState.md).[entity_id](BaseState.md#entity_id)

#### Defined in

lib/types/states/climate-state.ts:8

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

• **state**: ``"off"`` \| ``"heat"`` \| ``"cool"``

The state value

#### Overrides

[BaseState](BaseState.md).[state](BaseState.md#state)

#### Defined in

lib/types/states/climate-state.ts:7
