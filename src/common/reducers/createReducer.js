// @flow
import { has } from 'ramda';

export default function (initialState: InitialState, handlers: Handlers) {
  return (state: InitialState = initialState, action: Action = {}) => {
    if (has(action.type, handlers)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
