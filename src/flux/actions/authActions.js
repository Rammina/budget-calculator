// import serverRest from "../../apis/serverRest";
import history from "../../history";
import { returnErrors, clearErrors } from "./errorActions";
import { actionShowLoader } from "./loaderActions";
import { reset } from "redux-form";
import { AUTH_SIGN_IN, AUTH_SIGN_OUT } from "./types";

//Auth functions
export const authSignIn = ({ authMethod, userId }) => {
  return async function (dispatch) {
    dispatch({
      type: AUTH_SIGN_IN,
      payload: { authMethod, userId },
    });
  };
};

export const authSignOut = () => {
  return async function (dispatch) {
    dispatch({
      type: AUTH_SIGN_OUT,
    });
  };
};
