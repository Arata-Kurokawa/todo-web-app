import { createReducer, on } from '@ngrx/store'

import { AppState } from './auth.state'
import { signIn, signOut, signInSuccess } from './auth.action'

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
    console.log("sign in success !!!!!!!!!!!!!!!!!!!!!")
    return { ...state, isSignedIn: true }
  }),
  on(signOut, (state) => {
    return { ...state }
  })
)