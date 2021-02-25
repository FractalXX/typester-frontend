import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const fromAuthName = 'auth';

export interface AuthState {
  user: any;
}

export const initialState: AuthState = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  // on(AuthActions.setToken,
  //   (state, action) => ({ ...state, token: action.token }),
  // ),
);
