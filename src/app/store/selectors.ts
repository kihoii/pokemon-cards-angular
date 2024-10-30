import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsListState } from '../interfaces/CardsListState';

export const getCardsFeatureSelector =
  createFeatureSelector<CardsListState>('get cards');

export const isLoadingCardsSelector = createSelector(
  getCardsFeatureSelector,
  (state) => state.isLoading
);

export const getCardsSelector = createSelector(
  getCardsFeatureSelector,
  (state) => state.cards
);

export const getCardsTotalCount = createSelector(
  getCardsFeatureSelector,
  (state) => state.totalCount
);
