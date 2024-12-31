// src/store/rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./redux/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
