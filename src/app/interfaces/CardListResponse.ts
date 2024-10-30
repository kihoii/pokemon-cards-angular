import { CardDataResponse } from './CardDataResponse';

export interface CardListResponse {
  count: number;
  data: CardDataResponse[];
  page: number;
  pageSize: number;
  totalCount: number;
}
