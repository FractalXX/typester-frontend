import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export default class AuthEffects {
  constructor(
    private actions$: Actions,
    private service: AuthService,
    private router: Router,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      map((action) => action.payload),
      switchMap((payload) => this.service.login(payload)),
      tap((action) => {
        // TODO use cookie instead
        localStorage.setItem('token', action.token);
        this.router.navigateByUrl('/');
      }),
      map((result) => AuthActions.loginSuccessful({ token: result.token })),
      catchError((error) =>
        of(AuthActions.loginFailed({ reason: 'INVALID_CREDENTIALS' })),
      ),
    ),
  );

  // loginSuccessful$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.loginSuccessful),
  //     tap((action) => {
  //       // TODO use cookie instead
  //       localStorage.setItem('token', action.token);
  //       this.router.navigateByUrl('/');
  //     }),
  //   ),
  // );

  // loginFailed$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.loginFailed),
  //     tap((action) => {
  //       if (action.reason === 'INVALID_CREDENTIALS') {
  //         // TODO show notification
  //       }
  //     }),
  //   ),
  // );
}
