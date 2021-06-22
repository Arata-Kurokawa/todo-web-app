import { createReducer, on } from '@ngrx/store'

import { AppState } from './auth.state'
import { signIn, signOut, signInSuccess, signOutSuccess } from './auth.action'

const initialState: AppState = {
  isSignedIn: false,
  csrfToken: ""
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