import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureName } from '@app/stores/auth/auth.state'

const getState = createFeatureSelector<AuthState>(authFeatureName);

export const isSignedIn = createSelector(
  getState,
  state => state.isSignedIn
)
