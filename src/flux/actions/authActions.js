import serverRest from "../../apis/serverRest";
import history from "../../history";
import { returnErrors, clearErrors } from "./errorActions";
import { actionShowLoader } from "./loaderActions";
import { reset } from "redux-form";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

//Auth functions
export const authSignIn = ({ authMethod, userId }) => {
  return async function (dispatch) {
    dispatch({
      type: actionTypes.AUTH_SIGN_IN,
      payload: { authMethod, userId },
    });
  };
};

export const authSignOut = () => {
  return async function (dispatch) {
    dispatch({
      type: actionTypes.AUTH_SIGN_OUT,
    });
  };
};
