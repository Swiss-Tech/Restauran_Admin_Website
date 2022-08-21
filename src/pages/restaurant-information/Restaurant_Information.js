import React, { useState , useEffect} from "react";
import StepperPage from "./stepper/Stepper";
import Loader from "../reusable-components/Loader";
import { useSelector } from "react-redux";
import { Navigate, useNavigate ,Link } from "react-router";
import { accountActionCreators } from "../../actions";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import apiCall from "../../ApiCall";




export default function  RestaurantInformation () {

  const dispatch = useDispatch()
  const [isLoading , setLoading] = useState(false);
   const accountController = useSelector((state)=>state.account);
   const AccountActionController = bindActionCreators(accountActionCreators, dispatch);


  
   const [showModal, setModal] = useState(false);
  

  useEffect(()=>{
    if(accountController.responseMessage === null){
      
    }
    else{
      setModal(true)

    }
  },[])

    return (
      isLoading ? <Loader/> :  showModal ? 
       <div
          className="container-fluid vh-100"
          
        >
     

          <div className="row d-flex flex-column justify-content-center align-items-center h-100">
            <div>
              <div
                className="modal-dialog"
                role="document"
                
              >
                <div className="modal-content rounded-4 shadow">
                  <div className="modal-header border-bottom-0">
                    <h4 className="modal-title">Restaurant Information</h4>
                  </div>
                  <div className="modal-body py-0">
                    <h6>{accountController.responseMessage} <br/> { accountController.success ? "Please Refresh The Page":"Please Refresh The Page" }</h6>

                  </div>
                  <div className="modal-footer flex-column border-top-0">



                    <button
                      type="button"
                      className="btn btn-lg btn-light w-100 mx-0 "
                      data-bs-dismiss="modal"
                      onClick={() => {
                      
                        setModal(false);
                        <Navigate to="/home" />
                        window.location.reload(false);
                        apiCall(dispatch);
                    
                                               
                           
                           
                        
                   
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
      :
      <div className="container-fluid" style={{
        marginLeft:'10%',
        marginTop:'2%'
      }}>
        <div className="row  ">
 
          <div className="col-xl-10 col-12  ">

            <h6 style={{
              fontWeight:'300'
          
              
              
            }} className=" mt-5 ">Enter Your </h6>
            <h2 className="font-weight-bolder  fw-bolder lg mb-2"  >Restaurant Information</h2>
            <h6 className=" text-muted  font-weight-light mb-5">
              This information is needed so that your users can
            
              know more about you
            </h6>
      
           
          </div>
         
        </div>
        <StepperPage setLoading ={setLoading }  setModal ={ setModal }/>
      </div>
    );
  
}
