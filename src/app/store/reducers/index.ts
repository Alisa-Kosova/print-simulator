import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { testReducer } from '../reducers/test.reducer';
import { TestState } from '../../models/test-state';

export interface State {
  test: TestState;
}

export const reducers: ActionReducerMap<State> = {
  test: testReducer,
};

export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];