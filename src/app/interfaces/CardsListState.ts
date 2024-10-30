import { CardDataResponse } from './CardDataResponse';
import { CardListResponse } from './CardListResponse';

export interface CardsListState {
  isLoading: boolean;
  cards: CardDataResponse[];
  totalCount: number;
}
