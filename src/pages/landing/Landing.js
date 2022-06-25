import React, { useState } from "react";
import { StyledLanding } from "./styled/Landing.styled";
import { useSelector, useDispatch } from "react-redux";
import { firstTImeActionCreators } from "../../actions";
import { bindActionCreators } from "redux";
import { checkRestaurantStatus } from "../../services/auth.service";

var Link = require("react-router-dom").Link;

export default function Landing() {
  // this is to read
  const controller = useSelector((state) => state.first_time);

  //
  const dispatch = useDispatch();
  const ActionController = bindActionCreators(
    firstTImeActionCreators,
    dispatch
  );

  //console.log(controller);
  //initalFirstTime();

  return (
    <StyledLanding>
      <div className="container-fluid vh-100">
        <div className="row  h-100 justify-content-center align-items-center mx-2">
          <div className="col-lg-6 col-12   rounded-lg   p-3 border border-label ">
            <div className="w-100 bg-white h-100  rounded-lg  shadow-lg d-flex flex-column justify-content-center align-items-center px-3 py-5">
              <h1 className="font-weight-bold text-center mt-4">
                Opening For The <br /> First Time
              </h1>
              <h6 className="text-muted font-weight-light text-center">
                Setup your account and restaurant details on the following
                <br /> pages to get noticed
              </h6>
              <div className="sized-box"></div>
              <Link to="/signup">
                <button
                  onClick={() => ActionController.firstTime()}
                  type="button"
                  className="btn font-weight-normal h6 shadow-lg px-5 py-3 rounded-lg mb-4"
                >
                  Take Me there
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <button
          onClick={() =>
            login({
              name: "Leanne Graham",
            })
          }
        >
          get persons
        </button> */}
      {/* <button
          onClick={() => login({ email: "suz@gmail.com", password: "123456" })}
        >
          login
        </button> */}
      {/* <button onClick={() => example()}>Example</button> */}
    </StyledLanding>
  );
}
