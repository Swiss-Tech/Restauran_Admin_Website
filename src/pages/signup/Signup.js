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
  const [showModal, setModal] = useState(false);
  const [loading, setLoading] = useState("");
  function toggleModal(value) {
    setLoading(value);
  }


  console.log(messagecontroller.message);

   function handlePasswordConfirmation ( ){
    return (password === confirmPass);
   }
  return (
    <StyledSignup>



<div>
        <div
          className="container-fluid vh-100"
          style={showModal ? {} : { display: "none" }}
        >
          <div className="row d-flex flex-column justify-content-center align-items-center h-100">
            <div>
              <div
                className="modal-dialog"
                role="document"
                style={showModal ? {} : { display: "none" }}
              >
                <div className="modal-content rounded-4 shadow">
                  <div className="modal-header border-bottom-0">
                    <h4 className="modal-title">Signup</h4>
                  </div>
                  <div className="modal-body py-0">
                    <h6>{messagecontroller.message}</h6>
                  </div>
                  <div className="modal-footer flex-column border-top-0">
                    <button
                      type="button"
                      className="btn btn-lg btn-light w-100 mx-0"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        window.location.reload();
                        setModal(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

<div>
        <div
          className="container-fluid vh-100"
          style={loading ? {} : { display: "none" }}
        >
          <div className="row d-flex flex-column justify-content-center align-items-center h-100">
            <div className="spinner-border text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>


      
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
              <div className="form-control-feedback text-danger" style={ firstName ?{

display:'none'
                    }:{
                    }}>
        Please Enter First Name.
      </div>
                  <div className="form-control-feedback text-success" style={(firstName)?{
                    
                  }:{display:'none'}}>
      Looks good!
    </div>

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
              <div className="form-control-feedback text-danger" style={ lastName ?{

display:'none'
                    }:{
                    }}>
        Please Enter Last Name.
      </div>
                  <div className="form-control-feedback text-success" style={(lastName)?{
                    
                  }:{display:'none'}}>
      Looks good!
    </div>
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
              <div className="form-control-feedback text-danger" style={ email ?{

display:'none'
                    }:{
                    }}>
        Please Enter email.
      </div>
                  <div className="form-control-feedback text-success" style={(email)?{
                    
                  }:{display:'none'}}>
      Looks good!
    </div>
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
              <div className="form-control-feedback text-danger" style={ phoneNumber ?{

display:'none'
                    }:{
                    }}>
        Please Enter Phone Number.
      </div>
                  <div className="form-control-feedback text-success" style={(phoneNumber)?{
                    
                  }:{display:'none'}}>
      Looks good!
    </div>
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

<div className="form-control-feedback text-danger" style={ password ?{

display:'none'
                    }:{
                    }}>
        Please Enter Password.
      </div>
                  <div className="form-control-feedback text-success" style={(password)?{
                    
                  }:{display:'none'}}>
      Looks good!
    </div>
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

              <div className="form-control-feedback text-danger" style={ confirmPass && handlePasswordConfirmation() ?  {

display:'none'
                    }:{
                    }}>
                    {}
        Password don't match
      </div>
      
      
                  <div className="form-control-feedback text-success" style={(confirmPass && handlePasswordConfirmation())?{
                    
                  }:{display:'none'}}>
      Looks good!
    </div>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-row justify-content-center align-items-center ">
          <div className=" justify-content-center d-flex ">
            <button
              onClick={ async() => {

                 toggleModal(true);
               await ActionController.register({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phoneNumber: phoneNumber,
                  password: password,
                });
                setModal(true);
                toggleModal(false);

                        
              }}
              type="button"
              className="customButton btn font-weight-normal"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </StyledSignup>
  );
}
