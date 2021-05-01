import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer.js";
import errorReducer from "./errorReducer.js";
import userReducer from "./userReducer.js";
import loaderReducer from "./loaderReducer.js";

export default combineReducers({
  // form: formReducer,
  // auth: authReducer,
  // user: userReducer,
  // error: errorReducer,
  // loader: loaderReducer,
});
