import { AUTH_SIGN_IN, AUTH_SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  authMethod: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        authMethod: action.payload.authMethod,
        user: { userId: action.payload.userId },
      };
    case AUTH_SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        authMethod: null,
        user: null,
      };
    default:
      return state;
  }
};
