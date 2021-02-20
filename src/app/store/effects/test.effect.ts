
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { TestService } from '../../services/test.service';
import { testActionsType, TextUpdate } from '../actions/test.action';


@Injectable()
export class TestEffects {

  constructor(
    private actions$: Actions,
    private testService: TestService
  ) {}

  @Effect()
  textUpdate$ = this.actions$.pipe(
    ofType(testActionsType.textLoad),
    mergeMap(() => {
      return this.testService
        .getTestText()
        .pipe(
          map((text) => new TextUpdate(text))
        );
    })
  );
}