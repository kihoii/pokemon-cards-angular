import { Action, createReducer, on } from '@ngrx/store';
import { CardsListState } from '../interfaces/CardsListState';
import { getAllCardsAction } from './actions/get-cards.action';

const initialState: CardsListState = { isLoading: true };

const cardsListReducer = createReducer(
  initialState,
  on(
    getAllCardsAction,
    (state): CardsListState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducer(state: CardsListState, action: Action) {
  return cardsListReducer(state, action);
}
