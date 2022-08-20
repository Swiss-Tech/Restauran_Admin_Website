import React, { useState, Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { authactionCreators, messageActionCreators } from "../../actions";
import authHeader from "../../services/auth-header";
import { StyledLogin } from "./styled/StyledLogin";
import { logout } from "../../actions/auth";
import { useNavigate } from "react-router";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function Login() {
  const navigate = useNavigate();
  const controller = useSelector((state) => state);
  const dispatch = useDispatch();
  const ActionController = bindActionCreators(authactionCreators, dispatch);
  const MessageActionController = bindActionCreators(messageActionCreators, dispatch);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [showModal, setModal] = useState("");
  
  function toggleModal(value) {
    setLoading(value);
  }
  useEffect(()=>{
    MessageActionController.clearMessage();
  },[
    
  ])

  return (
    <StyledLogin>
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
                    <h4 className="modal-title">Login</h4>
                  </div>
                  <div className="modal-body py-0">
                    <h6>{controller.message.message}</h6>
                  </div>
                  <div className="modal-footer flex-column border-top-0">
                    <button
                      type="button"
                      className="btn btn-lg btn-light w-100 mx-0 "
                      data-bs-dismiss="modal"
                      onClick={() => {
                        setModal(false);
                        if(controller.auth.isLoggedIn){
                          navigate('/')
                          setModal(false);
                        }
                        window.location.reload(false);
                       
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
      
      <div className="container-fluid vh-100">
        <div className="row  h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-12 col-md-10 col-xl-4  justify-content-center align-items-center d-flex flex-column">
            <h2 className="font-weight-bold text-center mt-4 mb-3">Welcome</h2>

            <h6 className="text-muted font-weight-light text-center mb-4">
              Please login to contine , if you don't have an account <br />
              contact the admin
            </h6>

            <div className="col-xl-9 col-12 col-md-10 col-lg-10 mt-1 mb-5">
              <form>
                <div className="form-group">
                  <label className="font-weight-normal h6 ">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder=""
                    autoFocus
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

                <div className="form-group">
                  <label className="font-weight-normal h6 ">Password</label>
                  <input
                    autoComplete="on"
                    required
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                   <div className="form-control-feedback text-danger" style={ password ?{

display:'none'
                    }:{
                    }}>
        Please Enter password.
      </div>
                  <div className="form-control-feedback text-success" style={password?{
                    
                  }:{display:'none'}}>
      Looks good!
    </div>
                </div>
               
              </form>
            </div>

            <button
              onClick={async () => {
             
                if(password && email){
                  toggleModal(true);

//
//  ActionController.login({ email: email, password: password });
     setLoading(true)
await ActionController.login({
  email: email,
  password: password,
});
setLoading(false)
setModal(true);
toggleModal(false);
                }
               
              }}
              type="button"
              className="customButton shadow-lg px-5  rounded-lg mb-4"
            >
              Login
            </button>

           
          </div>
        </div>
      </div>
    </StyledLogin>
  );
}
