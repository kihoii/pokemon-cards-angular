import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addUserAction,
  addUserFailureAction,
  addUserSuccessAction,
  authUserAction,
  authUserFailureAction,
  authUserSuccessAction,
} from '../actions/user.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  actions$: Actions = inject(Actions);
  constructor(private httpService: UserService) {}

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUserAction),
      switchMap((request) => {
        return this.httpService.addUser$(request.user).pipe(
          map(() => {
            return addUserSuccessAction();
          }),
          catchError(() => of(addUserFailureAction()))
        );
      })
    )
  );

  authUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authUserAction),
      switchMap((request) => {
        return this.httpService.authUser$(request.user).pipe(
          map(() => {
            return authUserSuccessAction();
          }),
          catchError(() => of(authUserFailureAction()))
        );
      })
    )
  );
}
