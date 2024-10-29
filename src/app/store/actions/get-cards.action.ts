import { createAction } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const getAllCardsAction = createAction(ActionTypes.GET_ALL_CARDS);
