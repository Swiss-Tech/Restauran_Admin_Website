import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./Global";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { authactionCreators } from "./actions";
import authHeader from "./services/auth-header";

const theme = {
  colors: {
    primary: "#FECB16",
    body: "#ffffff",
    border: "#000",
    title: "#000",
  },
};
export default function App() {
  const controller = useSelector((state) => state.first_time);
  const authController = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const ActionController = bindActionCreators(authactionCreators, dispatch);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                controller ? (
                  <Landing />
                ) : authController.isLoggedIn ? (
                  <div>
                    Hello
                    <button onClick={() => console.log(authHeader())}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <Login />
                )
              }
            ></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalStyle>
    </ThemeProvider>
  );
}
