import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import first_time from "./first_time";
import menu from "./menu";
import category from "./category";
import order from "./order"
import customer from "./customer";
import employee from "./employees"
import account from "./account"
const reducers = combineReducers({
  auth: auth,
  message: message,
  first_time: first_time,
  menu:menu,
  category:category,
  order:order,
  customer:customer,
  employee:employee,
  account:account

  
  
});

export default reducers;
