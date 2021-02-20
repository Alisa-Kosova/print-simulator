import { TestActions, testActionsType } from '../actions/test.action';
import { TestState } from '../../models/test-state';

const initialState: TestState = {
  text: '',
  accuracy: 100,
  letters: 0,
  errors: 0,
  speed: 0,
  startDate: 0
}

export const testReducer = (state = initialState, action: TestActions) => {
  switch (action.type) {
    case testActionsType.textLoad:
      return {
        ...state
      };
    case testActionsType.textUpdate:
      const newText: string = action.payload;
      return {
        ...state,
        text: newText[0].replace(/\s{2,}/g, ' ').trim(),
        letters: newText[0].length,
        accuracy: 100
      };
    case testActionsType.errorsUpdate:
      return {
        ...state,
        errors: state.errors + 1,
        accuracy: 100 - (state.errors + 1) * 100 / state.letters
      };
    case testActionsType.dateUpdate:
      return {
        ...state,
        startDate: action.payload
      };
    case testActionsType.speedUpdate:
      return {
        ...state,
        speed: action.payload.letters/((action.payload.currentDate-state.startDate)/ 60 / 1000)
      };
    default:
      return state;
  }
}