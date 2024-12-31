// src/store/rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./redux/authSlice";
import playlistReducer from "../features/playlist/playlistSlice.tsx";

const rootReducer = combineReducers({
  playlist: playlistReducer,
  auth: authReducer,
});

export default rootReducer;
