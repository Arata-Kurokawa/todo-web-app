import { createReducer, on } from '@ngrx/store'

import { AuthState } from './auth.state'
import { signIn, signOut, signInSuccess, signOutSuccess } from './auth.action'

const initialState: AuthState = {
  isSignedIn: false
}

export const reducer = createReducer(
  initialState,
  on(signIn, (state, _) => {
    return { ...state }
  }),
  on(signInSuccess, (state) => {
    return { ...state, isSignedIn: true }
  }),
  on(signOut, (state) => {
    return { ...state }
  }),
  on(signOutSuccess, (state) => {
    return { ...state, isSignedIn: false }
  })
)