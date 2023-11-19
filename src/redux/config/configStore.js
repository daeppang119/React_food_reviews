import { createStore } from "redux";
import { combineReducers } from "redux";
import lists from "../modules/lists";

const rootReducer = combineReducers({ lists });
const store = createStore(rootReducer);

export default store;
