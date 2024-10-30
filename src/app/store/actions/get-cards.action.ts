import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { CardListResponse } from '../../interfaces/CardListResponse';
import { CardDataResponse } from '../../interfaces/CardDataResponse';

export const getAllCardsAction = createAction(
  ActionTypes.GET_ALL_CARDS,
  props<{ page: number; pageSize: number; name?: string }>()
);

export const getAllCardsSuccessAction = createAction(
  ActionTypes.GET_ALL_CARDS_SUCCESS,
  props<{ cards: CardDataResponse[]; totalCount: number }>()
);

export const getAllCardsFailureAction = createAction(
  ActionTypes.GET_ALL_CARDS_FAILURE
);
