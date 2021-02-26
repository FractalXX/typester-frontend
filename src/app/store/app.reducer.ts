import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export const fromAppName = 'app';

export interface AppState {
  mainBackground: string;
}

export const initialState: AppState = {
  mainBackground: null,
};

export const reducer = createReducer(
  initialState,
  on(AppActions.setMainBackground, (state, action) => ({
    ...state,
    mainBackground: action.background,
  })),
);

export const selectMainBackground = (state: AppState) => state.mainBackground;
