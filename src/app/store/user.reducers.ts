import { createReducer, on } from '@ngrx/store';
import { AddUserState } from '../interfaces/AddUserState';
import {
  addUserAction,
  addUserFailureAction,
  addUserSuccessAction,
  authUserAction,
  authUserFailureAction,
  authUserSuccessAction,
} from './actions/user.actions';
import { UserState } from '../interfaces/UserState';

const addUserInitialState: AddUserState = {
  isSignedUp: false,
};

export const AddUserReducer = createReducer(
  addUserInitialState,
  on(addUserAction, (state): AddUserState => ({ ...state })),
  on(
    addUserSuccessAction,
    (state): AddUserState => ({ ...state, isSignedUp: true })
  ),
  on(
    addUserFailureAction,
    (state): AddUserState => ({ ...state, isSignedUp: false })
  )
);

const authUserInitialState: UserState = {
  isAuthed: false,
};

export const AuthUserReducer = createReducer(
  authUserInitialState,
  on(authUserAction, (state): UserState => ({ ...state })),
  on(
    authUserSuccessAction,
    (state): UserState => ({ ...state, isAuthed: true })
  ),
  on(
    authUserFailureAction,
    (state): UserState => ({ ...state, isAuthed: false })
  )
);
