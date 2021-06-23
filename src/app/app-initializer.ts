import { CsrfTokenService } from '@app/services/csrf-token-service'
import { AuthService } from '@app/services/auth-service'
import { Observable } from 'rxjs'
import { mergeMap, tap } from 'rxjs/operators'
import { Store } from '@ngrx/store'
import { signInSuccess } from './stores/auth/auth.action'

export module AppInitializer {
  export const deps = [CsrfTokenService, AuthService, Store]

  export function initialize(csrfTokenService: CsrfTokenService, authService: AuthService, store: Store) {
    return (): Observable<any> => {
      return csrfTokenService.get().pipe(
        mergeMap(() => {
          return authService.verify()
        }),
        tap(isValid => {
          if (isValid) {
            store.dispatch(signInSuccess())
          }
        })
      )
    }
  }
}
