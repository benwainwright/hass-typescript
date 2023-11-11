export type StateLoadCallback<S> = (state: S) => void;
export type StateChangedCallback<S> = (oldState: S, newState: S) => void;
