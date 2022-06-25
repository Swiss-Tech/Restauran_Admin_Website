import React, { Component } from "react";

export default class Stepper extends Component {
  render() {
    return (
      <div>
        {/* stepne */}

        <div className="row pl-2 ">
          <div className="pl-2  p-0">
            <div class="d-flex flex-column h-100 w-50 align-items-center">
              <div class="bg-primary  rounded-circle circle d-flex justify-content-center align-items-center font-weight-bold text-white">
                1
              </div>

              <div className="progress-bar "></div>
            </div>
          </div>
          <input
            class="d-none"
            accept="image/*"
            type="file"
            onChange={"onFileSelectChange($event)"}
          />
          <div class="col-xl-11 col-10">
            {/* [collapse]="step1Collapsed" */}
          </div>
        </div>
      </div>
    );
  }
}
