import { Action, createReducer, on } from '@ngrx/store';
import { CardsListState } from '../interfaces/CardsListState';
import {
  getAllCardsAction,
  getAllCardsSuccessAction,
} from './actions/get-cards.action';

const initialState: CardsListState = {
  isLoading: false,
  cards: [],
  totalCount: 0,
};

export const cardsListReducer = createReducer(
  initialState,
  on(
    getAllCardsAction,
    (state): CardsListState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getAllCardsSuccessAction,
    (state, action): CardsListState => ({
      ...state,
      isLoading: false,
      cards: action.cards,
      totalCount: action.totalCount,
    })
  )
);

export function reducer(state: CardsListState, action: Action) {
  return cardsListReducer(state, action);
}
