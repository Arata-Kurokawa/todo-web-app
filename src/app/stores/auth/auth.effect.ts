import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators'

import { AuthService } from '@app/services/auth-service';
import { signIn, signOut, AuthActionType } from '@app/stores/auth/auth.action'
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  signIn$ = createEffect(() => { 
    return this.actions$.pipe(
      ofType(signIn),
      mergeMap(action => {
        return this.authService.signIn(action.email, action.password).pipe(
          map(() => {
            this.router.navigate(['/'])
            return ({ type: AuthActionType.signInSuccess })
          })
        )
      })
    )
  })

  signOut$ = createEffect(() => { 
    return this.actions$.pipe(
      ofType(signOut),
      mergeMap(_ => {
        return this.authService.signOut().pipe(
          map(() => {
            this.router.navigate(['/auth/signIn'])
            return ({ type: AuthActionType.signOutSuccess })
          })
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}