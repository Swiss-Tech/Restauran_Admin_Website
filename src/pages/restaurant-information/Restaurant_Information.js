import React, { Component } from "react";
import StepperPage from "./stepper/Stepper";


export default class RestaurantInformation extends Component {
  render() {
    return (
      <div className="container-fluid" style={{
        marginLeft:'10%',
        marginTop:'2%'
      }}>
        <div className="row  ">
          <div className="col-xl-10 col-12  ">
            <h6 style={{
              fontWeight:'300',
              marginTop:'50px',
              marginBottom:'10px',
              fontSize:'18px'
            }}>Enter Your </h6>
            <h2 className="font-weight-bolder" style={{
              fontWeight:'800',
              fontSize:'40px',
              marginBottom:'10px',
            }}>Restaurant Information</h2>
            <h6 className=" text-muted  font-weight-light mb-5" style={{
              fontSize:'13px'
            }}>
              This information is needed so that your users can
              <br />
              know more about you
            </h6>
      
           
          </div>
         
        </div>
        <StepperPage />
      </div>
    );
  }
}
