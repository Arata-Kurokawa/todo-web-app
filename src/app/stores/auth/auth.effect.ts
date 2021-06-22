import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators'

import { AuthService } from '@app/services/auth-service';
import { signIn, AuthActionType } from '@app/stores/auth/auth.action'

@Injectable()
export class AuthEffect {
  signIn$ = createEffect(() => { 
    return this.actions$.pipe(
      ofType(signIn),
      mergeMap(action => {
        return this.authService.signIn(action.email, action.password).pipe(
          map(() => ({ type: AuthActionType.signInSuccess }))
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}