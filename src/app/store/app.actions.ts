import { createAction, props } from '@ngrx/store';

export const setMainBackground = createAction(
  '[App] Set main background',
  props<{ background: string }>(),
);
