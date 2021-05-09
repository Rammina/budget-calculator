import {} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  // the app will tried to load the user at first anyway, so may as well set it to true
  isLoading: true,
  userId: null,
};

let sanitizedAuthPayload = {};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
