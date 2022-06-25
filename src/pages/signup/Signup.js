import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StyledSignup } from "./styled/SignupStyled";
import { useSelector, useDispatch } from "react-redux";
import { authactionCreators } from "../../actions";
import { bindActionCreators } from "redux";

var Link = require("react-router-dom").Link;

export default function Signup() {
  const controller = useSelector((state) => state.auth);
  const messagecontroller = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const ActionController = bindActionCreators(authactionCreators, dispatch);
  console.log(controller);
  console.log(ActionController);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showModal, setModal] = useState("");

  return (
    <StyledSignup>
      <div className="container-fluid vh-100 ">
        <div className="row h-25 d-flex flex-column align-items-center justify-content-end">
          <h3 className="font-weight-bold text-center mt-4 mb-2">Welcome</h3>
          <h6 className="text-muted font-weight-light text-center">
            Please Enter Your Credentials To Register
          </h6>
        </div>
        <div className="row justify-content-center align-items-center my-5 py-2">
          <div className="col-lg-4 col-12  col-sm-5 col-xl-3   pl-lg-5 ">
            <div className="form-group">
              <label className="font-weight-normal h6 ">First Name</label>
              <input
                autoFocus
                required
                type="text"
                className="form-control"
                name=""
                id="first-name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="font-weight-normal h6 ">Last Name</label>
              <input
                required
                type="text"
                className="form-control"
                name=""
                id="last-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="font-weight-normal h6 ">Email</label>
              <input
                required
                type="text"
                className="form-control"
                name=""
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-4 col-12 col-sm-5  col-xl-3 pl-lg-5">
            <div className="form-group">
              <label className="font-weight-normal h6 ">Phone Number</label>
              <input
                required
                type="text"
                className="form-control"
                name=""
                id="phone-number"
                placeholder=""
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="font-weight-normal h6 ">Password</label>
              <input
                required
                type="password"
                className="form-control"
                name=""
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="font-weight-normal h6 ">Confirm Password</label>
              <input
                required
                type="password"
                className="form-control"
                name=""
                id="confirm-password"
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row d-flex flex-row justify-content-center align-items-center ">
          <div className=" justify-content-center d-flex ">
            <button
              onClick={() =>
                ActionController.register({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phoneNumber: phoneNumber,
                  password: password,
                })
              }
              type="button"
              className="btn font-weight-normal h6 shadow-lg px-5 py-3 rounded-lg mb-4"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </StyledSignup>
  );
}
