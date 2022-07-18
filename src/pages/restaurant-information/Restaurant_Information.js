import React, { Component } from "react";
import StepperPage from "./stepper/Stepper";


export default class RestaurantInformation extends Component {
  render() {
    return (
      <div className="container-fluid  vh-100">
        <div className="row  justify-content-center ">
          <div className="col-xl-10 col-12 pt-5 pb-5 mt-5 px-3">
            <h5>Enter Your </h5>
            <h1 className="font-weight-bolder">Restaurant Information</h1>
            <h6 className=" text-muted  font-weight-light mb-5">
              This information is needed so that your users can
              <br />
              know more about you
            </h6>
      
            <StepperPage />
          </div>
        </div>
      </div>
    );
  }
}
