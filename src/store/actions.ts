import { createAction, props } from '@ngrx/store';

export const myAction = createAction(
  '[My Feature] My Action',
  props<{ payload: any }>()
);