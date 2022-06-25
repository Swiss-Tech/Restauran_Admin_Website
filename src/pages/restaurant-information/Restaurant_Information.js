import React, { Component } from "react";

export default class RestaurantInformation extends Component {
  render() {
    return (
      <div class="container-fluid  vh-100">
        <div class="row  justify-content-center ">
          <div class="col-xl-10 col-12 pt-5 pb-5 mt-5 px-3">
            <h5>Enter Your</h5>

            <h1 class="font-weight-bolder">Restaurant Information</h1>

            <h6 class=" text-muted  font-weight-light mb-5">
              this_information_is_needed_so_that_your_users_can
              <br />
              know_more_about_you
            </h6>

            <app-stepper></app-stepper>
          </div>
        </div>
      </div>
    );
  }
}
