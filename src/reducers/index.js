import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import first_time from "./first_time";

const reducers = combineReducers({
  auth: auth,
  message: message,
  first_time: first_time,
});

export default reducers;
