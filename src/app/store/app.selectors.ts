import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from './app.reducer';

const appSelector = createFeatureSelector(fromStore.fromAppName);

export const mainBackground = createSelector(
  appSelector,
  fromStore.selectMainBackground,
);
