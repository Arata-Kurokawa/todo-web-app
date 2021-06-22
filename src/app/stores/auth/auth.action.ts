import { createAction, props } from '@ngrx/store';

export enum AuthActionType {
  signIn = '[auth] signIn',
  signOut = '[auth] signOut',
  signInSuccess = '[auth] signInSuccess'
}

export const signIn = createAction(
  AuthActionType.signIn,
  props<{ email: string; password: string }>()
);

export const signInSuccess = createAction(
  AuthActionType.signInSuccess
)
 
export const signOut = createAction(
  AuthActionType.signOut
);