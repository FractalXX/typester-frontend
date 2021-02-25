import { createAction, props } from '@ngrx/store';
import { BasicAuthDto } from '../dtos/basic-auth.dto';

export const login = createAction(
  '[Auth] Login',
  props<{ payload: BasicAuthDto }>(),
);

export const loginSuccessful = createAction(
  '[Auth] Successful login',
  props<{ token: string }>(),
);

export const loginFailed = createAction(
  '[Auth] Login failed',
  props<{ reason: any }>(),
);
