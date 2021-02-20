import { Action } from '@ngrx/store';

export enum testActionsType {
  textLoad = '[TEST] text load',
  textUpdate = '[TEST] text update',
  errorsUpdate = '[TEST] errors update',
  dateUpdate = '[TEST] date update',
  speedUpdate = '[TEST] speed update',
}

export class TextLoad implements Action {
  readonly type = testActionsType.textLoad;
}

export class TextUpdate implements Action {
  readonly type = testActionsType.textUpdate;
  constructor(public payload: string) { }
}

export class ErrorsUpdate implements Action {
  readonly type = testActionsType.errorsUpdate;
}

export class SpeedUpdate implements Action {
  readonly type = testActionsType.speedUpdate;
  constructor(public payload: {letters: number, currentDate: number}) { }
}

export class DateUpdate implements Action {
  readonly type = testActionsType.dateUpdate;
  constructor(public payload: number) { }
}

export type TestActions = TextUpdate
  | TextLoad
  | ErrorsUpdate
  | SpeedUpdate
  | DateUpdate;
