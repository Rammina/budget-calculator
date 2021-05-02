import { loadUser } from "../authActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../types";

// sample testing of action creator function
/*
describe("actionCreator", () => {
  test("returns action with type `ACTION_TYPE`", () => {
    const action = actionCreator();
    expect(action).toEqual({ type: ACTION_TYPE});
  });
});
*/
describe("loadUser", () => {
  test("returns action with type `USER_LOADED`", () => {
    const action = loadUser();
    expect(action).toEqual({ type: USER_LOADED });
  });
});
