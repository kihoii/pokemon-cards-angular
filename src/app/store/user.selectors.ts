import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../interfaces/UserState';
import { AddUserState } from '../interfaces/AddUserState';

export const addUserFeatureSelector =
  createFeatureSelector<AddUserState>('add user');

export const addUserSelector = createSelector(
  addUserFeatureSelector,
  (state) => state.isSignedUp
);

export const authUserFeatureSelector = createFeatureSelector<UserState>('auth');

export const authUserSelector = createSelector(
  authUserFeatureSelector,
  (state) => state.isAuthed
);
