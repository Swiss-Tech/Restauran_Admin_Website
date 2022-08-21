import {
  login_function,
  logout_function,
  register_function,

} from "../services/auth.service";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";







export const register = (user) => (dispatch) => {
  return register_function(user).then(
    (data) => {
      if (data.success) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { token: data.data },
        });
        dispatch({
          type: SET_MESSAGE,
          payload: data.message,
        });
      } else {
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: data.message,
        });
      }
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      // return Promise.reject();
    }
  );
};

export const login = (user) => (dispatch) => {
  return login_function(user).then(
    (data) => {
    
      if (data.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { token: data.data },
        });
        dispatch({
          type: SET_MESSAGE,
          payload: data.message,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: data.message,
        });
      }

      //return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      const errorMessage = error.message;

      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: errorMessage + message,
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  logout_function();
  dispatch({
    type: LOGOUT,
  });
};

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({ type: CLEAR_MESSAGE });
