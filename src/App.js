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
import RestaurantInformation from "./pages/restaurant-information/Restaurant_Information";
import Home from "./pages/home/Home";
import OrderDetail from "./pages/home/order/orderDetail/OrderDetail";

import Dashboard from "./pages/home/dashboard/Dashboard";
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
console.log(controller);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                controller === null ? (
                  <Landing />
                ) :  authController.isLoggedIn ? (
                  //  <RestaurantInformation />
                  <Home/>

                  
                ) : (
                  <Login />
                )
              }
            ></Route>
            <Route path="/restaurantinformation" element={<RestaurantInformation />} ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path = "/orderdetail" element={<OrderDetail/>}></Route>
        
            <Route path = "/dashboard" element={<Dashboard/>}></Route>
            <Route path = "/home" element={<Home/>}></Route>

            
            


          </Routes>
        </BrowserRouter>
      </GlobalStyle>
    </ThemeProvider>
  );
}
