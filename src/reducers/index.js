import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import first_time from "./first_time";
import menu from "./menu";
import category from "./category";
const reducers = combineReducers({
  auth: auth,
  message: message,
  first_time: first_time,
  menu:menu,
  category:category
  
});

export default reducers;
