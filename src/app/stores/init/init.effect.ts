import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';

import { AuthService } from '@app/services/auth-service';
import { tap, mergeMap } from 'rxjs/operators';
import { CsrfTokenService } from '@app/services/csrf-token-service';
import { signInSuccess } from '@app/stores/auth/auth.action';


@Injectable()
export class InitEffect {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      mergeMap(_ => {
        return this.csrfService.get()
      }),
      mergeMap(_ => {
        return this.authService.verify().pipe(
          tap(isValid => {
            if (isValid) {
              this.store.dispatch(signInSuccess())
            }
          })
        )
      })
    )
  }, { dispatch: false })

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private csrfService: CsrfTokenService,
    private router: Router,
    private store: Store
  ) {}
}
