import React, {useEffect, useState} from 'react'
import { StyledEditAdmin } from './styled/StyledEditAdmin';
import { useSelector, useDispatch } from "react-redux";
import { accountActionCreators } from '../../../actions';
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router";
import Modal from "react-modal";
import apiCall from '../../../ApiCall';


export default function AdminEdit() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
      apiCall(dispatch)
    },[])

    const controller = useSelector((state) => state.auth);
    const messagecontroller = useSelector((state) => state.account);
    const adminController = useSelector((state)=>state.account.adminInformation)
  
   
    
  
    const AccountActionController = bindActionCreators(accountActionCreators, dispatch);
    
    
  
    const [firstName, setFirstName] = useState(adminController['firstName'] ? adminController['firstName'] :"");
    const [lastName, setLastName] = useState(adminController['lastname']?adminController['lastname']:"");
    const [email, setEmail] = useState(adminController['email']?adminController['email']:"");
    const [phoneNumber, setPhoneNumber] = useState(adminController['phoneNumber']?adminController['phoneNumber']:"");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
  
    const [showModal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
  
  
    function toggleModal(value) {
      setLoading(value);
    }
  
  
    
  
     function handlePasswordConfirmation ( ){
      return (password === confirmPass);
     }

     console.log(adminController)
    return (
      <StyledEditAdmin>
  

  
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
                      <h4 className="modal-title">Update</h4>
                    </div>
                    <div className="modal-body py-0">
                      <h6>{messagecontroller.message}</h6>
                    </div>
                    <div className="modal-footer flex-column border-top-0">
                      <button
                        type="button "
                        className="customButton btn btn-lg btn-light w-100 mx-0"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          
                      
                          navigate('/')
                          setModal(false);
                        }}
                      >
                        Okay
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
            <h3 className="font-weight-bold text-center mt-4 mb-2">Edit Admin </h3>
            <h6 className="text-muted font-weight-light text-center">
               Enter Admin Credentials To Update Admin 
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
                  defaultValue={firstName}
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
                  defaultValue={lastName}
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
                  defaultValue={ email }
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
                  defaultValue={ phoneNumber }
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
  
                  //  toggleModal(true);
                  setLoading(true);
  
                 await AccountActionController.updateAdminInfoAction({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNumber: phoneNumber,
                    password: password,
                  });
                  setLoading(false);
                  setModal(true);
                  
  
                          
                }}
                type="button"
                className="customButton btn font-weight-normal"
              >
                Update Admin
              </button>
            </div>
          </div>
        </div>
      </StyledEditAdmin>
    );
  }
  