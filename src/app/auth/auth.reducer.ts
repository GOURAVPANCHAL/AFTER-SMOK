import { createReducer, on } from "@ngrx/store";
import { isLoggedIn, isLoggedOut } from "./auth.actions";

export const initialState = false;

const _authReducer = createReducer(
  initialState,
  on(isLoggedIn, state => state = true),
  on(isLoggedOut, state => state = false),
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
