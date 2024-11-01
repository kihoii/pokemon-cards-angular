import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { AddUserRequest } from '../../interfaces/AddUserRequest';
import { AuthRequest } from '../../interfaces/AuthRequest';

export const addUserAction = createAction(
  ActionTypes.ADD_USER,
  props<{ user: AddUserRequest }>()
);

export const addUserSuccessAction = createAction(ActionTypes.ADD_USER_SUCCESS);

export const addUserFailureAction = createAction(ActionTypes.ADD_USER_FAILURE);

export const authUserAction = createAction(
  ActionTypes.AUTH_USER,
  props<{ user: AuthRequest }>()
);

export const authUserSuccessAction = createAction(
  ActionTypes.AUTH_USER_SUCCESS
);

export const authUserFailureAction = createAction(
  ActionTypes.AUTH_USER_FAILURE
);
