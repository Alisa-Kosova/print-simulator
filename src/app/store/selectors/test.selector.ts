import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TestState } from '../../models/test-state';

export const selectTestFeature = createFeatureSelector<TestState>('test');

export const selectText = createSelector(
  selectTestFeature,
  (state: TestState): string => state.text
);

export const selectAccuracy = createSelector(
  selectTestFeature,
  (state: TestState): number => state.accuracy
);

export const selectLetters = createSelector(
  selectTestFeature,
  (state: TestState): number => state.letters
);

export const selectSpeed = createSelector(
  selectTestFeature,
  (state: TestState): number => state.speed
);