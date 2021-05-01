import { createStore } from "redux";
import rootReducer from "./flux/reducers";

// create the redux store to be used by the Provider in index.js
export default createStore(rootReducer);
