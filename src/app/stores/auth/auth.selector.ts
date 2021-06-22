import { createSelector } from '@ngrx/store';

import { AuthState } from '@app/stores/auth/auth.state'

export const selectSignedIn = createSelector(
  (state: AuthState) => state.isSignedIn,
  isSignedIn => isSignedIn
)
