import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const token = localStorage.getItem("token");
var isFirstTime = true;
const initalState = token
  ? { isLoggedIn: true, token }
  : { isLoggedIn: false, token: null };

export default function reducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    case "authuser":
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };

    default:
      return state;
  }
}
