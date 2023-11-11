/**
 * @public
 */
export type StateLoadCallback<S> = (state: S) => void;

/**
 * @public
 */
export type StateChangedCallback<S> = (oldState: S, newState: S) => void;
