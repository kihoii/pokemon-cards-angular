import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getAllCardsAction,
  getAllCardsFailureAction,
  getAllCardsSuccessAction,
} from '../actions/get-cards.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { CardService } from '../../services/card.service';
import { CardListResponse } from '../../interfaces/CardListResponse';

@Injectable()
export class GetCardsEffect {
  actions$: Actions = inject(Actions);
  constructor(private httpService: CardService) {}

  getCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCardsAction),
      switchMap((request) => {
        return this.httpService
          .getCards$(request.page, request.pageSize, request.name)
          .pipe(
            map((response: CardListResponse) => {
              let cards = response.data;
              let totalCount = response.totalCount;
              return getAllCardsSuccessAction({ cards, totalCount });
            }),
            catchError(() => of(getAllCardsFailureAction()))
          );
      })
    )
  );
}
