import React, { Component, useState, useEffect, useRef } from "react";
import StepperHeader from "./stepper-header/StepperHeader";
import { StyledStepper } from "./styled/StyledStepper";
import { IoImageOutline } from "react-icons/io5";
import styled from "styled-components";

import VerticalLinearStepper from "./stepperexample";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { StyledEngineProvider } from "@mui/material/styles";
import { ImagePicker } from "./Image_Picker";
import { StepperComponent } from "./stepperexample";
export default function StepperPage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // step1 form
  const [restaurantName, setRestaurantName] = useState();
  const [restaurantNumber, setRestaurantNumber] = useState();
  const [restaurantEmail, setRestaurantEmail] = useState();
  const [restaurantLocation, setRestaurantLocation] = useState();
  const [restaurantDescription, setRestaurantDescription] = useState();
  const [openAt, setOpetAtTime] = useState("10:00");
  const [closeAt, setColseAtTime] = useState("10:00");

  // handle validation
  const handleValidation = () => {
    if (!restaurantName) {
      console.log("this field can not be empty");
    }
  };

  const [logoUrl, setLogoUrl] = useState();
  const [restaurantImage1, setRestarantImage1] = useState();
  const [restaurantImage2, setRestarantImage2] = useState();
  const [restaurantImage3, setRestarantImage3] = useState();
  const [restaurantImage4, setRestarantImage4] = useState();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <StyledStepper>
      <StepperComponent />
      <div className="row pl-2 ">
        <div className="pl-2  p-0">
          <div class="d-flex flex-column h-100 w-50 align-items-center">
            <div className="progressNumberIndicator circle d-flex justify-content-center align-items-center font-weight-bold ">
              1
            </div>
            <div className="progress-bar"></div>
          </div>
        </div>
        <input className="d-none" type="file" />
        <div class="col-xl-11 col-10">
          <StepperHeader stepNumber={1} stepTitle={"Basic Infromation"} />

          {/* colapse */}
          <div id="step_1">
            <form className="needs-validation" id="step1FormGroup">
              <div className="row bg-white py-4">
                {/* image picker */}

                <ImagePicker
                  handleClick={setLogoUrl}
                  imageUrl={logoUrl}
                  id={"logo"}
                />

                {/* Restaurant Name and Phone Number */}
                <div class="col-lg-4  justify-content-between d-flex flex-column">
                  <div class="form-group">
                    <label class="font-weight-normal h6 " for="restaurant-name">
                      Resturant Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="restaurantName"
                      id="restaurant-name"
                      onChange={(e) => setRestaurantName(e.target.value)}
                    />
                  </div>

                  {/* display error here */}
                  {/* <!-- feedback message --> */}
                  <div class="form-control-feedback text-danger">
                    Restaurant Name is required
                  </div>
                  {/* <!-- feedback message valid--> */}
                  <div class="form-control-feedback text-success">
                    Looks Good
                  </div>

                  <div class="form-group">
                    <label class="font-weight-normal h6 " for="phone-number">
                      Phone number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      formControlName="phoneNumber"
                      name="phoneNumber"
                      id="phone-number"
                      onChange={(e) => setRestaurantNumber(e.target.value)}
                    />
                    {/* <!-- feedback message --> */}
                    <div class="form-control-feedback text-danger">
                      Phone Number is required
                    </div>
                    {/* <!-- feedback message valid--> */}
                    <div class="form-control-feedback text-success">
                      Looks Good
                    </div>
                  </div>
                </div>
                <div class="col-lg-4  d-flex flex-column">
                  {/* <!-- Location --> */}
                  <div class="form-group">
                    <label class="font-weight-normal h6 " for="location">
                      Location
                    </label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      name=""
                      formControlName="location"
                      id="location"
                      placeholder=""
                      onChange={(e) => setRestaurantLocation(e.target.value)}
                    />
                    <div class="form-control-feedback text-danger">
                      Location is required
                    </div>

                    <div class="form-control-feedback text-success">
                      Looks Good
                    </div>
                    <div style={{ height: 26 }}></div>
                  </div>

                  <div class="form-group">
                    <label class="font-weight-normal h6 " for="email">
                      Email
                    </label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      name=""
                      formControlName="email"
                      id="email"
                      placeholder=""
                      onChange={(e) => setRestaurantEmail(e.target.value)}
                    />
                    <div class="form-control-feedback text-danger">
                      Location is required
                    </div>

                    <div class="form-control-feedback text-success">
                      Looks Good
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 mt-3">
                  <div class="form-group">
                    <label class="font-weight-normal h6 " for="description">
                      Short Description
                    </label>
                    <textarea
                      required
                      type="text"
                      rows="3"
                      class="form-control"
                      name=""
                      formControlName="shortDescription"
                      id="description"
                      placeholder=""
                      onChange={(e) => setRestaurantDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    //  moveToStep2()
                    // !step1Collapsed
                    console.log(restaurantName);
                  }}
                  type="submit"
                  className="stepperContinueButton btn"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* step 2 */}
      <div class="row pl-2 ">
        <div class="col-xl-11 col-10">
          <StepperHeader stepNumber={2} stepTitle={"Working Days and Hours"} />
          <div id="step_2">
            <div class="dropdown-divider"></div>
            <div class="row bg-white py-4">
              <div class="col-lg-6 bg-">
                <form>
                  <h6>Dates</h6>
                  <form>
                    <div class="row" style={{ display: "flex" }}>
                      <ul>
                        {days.map((element) => (
                          <li>
                            <input
                              type="checkbox"
                              id={element}
                              name={element}
                              value={element}
                            />
                            <label for={element}>{element[0]}</label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div class="form-control-feedback text-danger">
                      Please Pick Work Days
                    </div>
                    <div class="form-control-feedback text-success">
                      Looks Good
                    </div>
                  </form>
                  <div class="dropdown-divider my-4"></div>
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <h6 class="mb-3">Open at</h6>

                      <StyledEngineProvider injectFirst>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <TimePicker
                            showToolbar={false}
                            value={openAt}
                            onChange={setOpetAtTime}
                            renderInput={(params) => <TextField {...params} />}
                            ampmInClock={false}
                          />
                        </LocalizationProvider>
                      </StyledEngineProvider>

                      <div class="form-control-feedback text-danger">
                        Please Add time
                      </div>

                      <div class="form-control-feedback text-success">
                        Looks Good
                      </div>
                    </div>

                    <div class="col-lg-6 mt-lg-0 mt-4">
                      <h6 class="mb-3">Closes At</h6>
                      <StyledEngineProvider injectFirst>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <TimePicker
                            showToolbar={false}
                            label=""
                            value={closeAt}
                            onChange={setColseAtTime}
                            renderInput={(params) => <TextField {...params} />}
                            ampmInClock={false}
                          />
                        </LocalizationProvider>
                      </StyledEngineProvider>

                      <timepicker formControlName="mTimeCloseCtrl"></timepicker>

                      <div class="form-control-feedback text-danger">
                        Please Add time
                      </div>

                      <div class="form-control-feedback text-success">
                        Looks Good
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="d-flex mt-4 twoButton">
              <button type="button" class="previous_btn btn">
                Previous
              </button>

              <button
                onClick={() => {
                  //  moveToStep2()
                  // !step1Collapsed
                  console.log(restaurantName);
                }}
                type="submit"
                className="stepperContinueButton btn"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}

      <div className="row pl-2 ">
        {/* header */}
        <div className="pl-2  p-0">
          <div class="d-flex flex-column h-100 w-50 align-items-center">
            <div className="progressNumberIndicator circle d-flex justify-content-center align-items-center font-weight-bold ">
              3
            </div>
            <div className="progress-bar"></div>
          </div>
        </div>
        <StepperHeader stepNumber={3} stepTitle={"Restaurant Images"} />
        <div id="step_4">
          <div className="multipleImages">
            <ImagePicker
              handleClick={setRestarantImage1}
              imageUrl={restaurantImage1}
              id={"restaurantImage1"}
            />
            <ImagePicker
              handleClick={setRestarantImage2}
              imageUrl={restaurantImage2}
              id={"restaurantImage2"}
            />
            <ImagePicker
              handleClick={setRestarantImage3}
              imageUrl={restaurantImage3}
              id={"restaurantImage3"}
            />
            <ImagePicker
              handleClick={setRestarantImage4}
              imageUrl={restaurantImage4}
              id={"restaurantImage4"}
            />
          </div>
          <div class="d-flex mt-4 twoButton">
            <button type="button" class="previous_btn btn ">
              Previous
            </button>

            <button type="button" class="stepperContinueButton">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* step 4 */}
      <div class="row pl-2 ">
        <div class="pl-2  p-0">
          <div class="d-flex flex-column h-100 w-50 align-items-center">
            <div class="progressNumberIndicator  rounded-circle circle d-flex justify-content-center align-items-center font-weight-bold text-white">
              4
            </div>

            <div class="progress-bar bg-primary"></div>
          </div>
        </div>
        <div class="col-xl-11 col-10">
          <StepperHeader stepNumber={4} stepTitle={"Shared Costs"} />
          <div id="step4">
            <div class="dropdown-divider"></div>
            <div class="row bg-white py-4">
              <div class="col-lg-6 col-12">
                <h6 class=" text-muted  font-weight-light mb-3">
                  This information is needed so that your users can <br /> know
                  more about you
                </h6>
                <form>
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <div class="form-group">
                        <label class="font-weight-normal h6 " for="item-name">
                          Item name
                        </label>
                        <input
                          formControlName="itemControlValue"
                          required
                          type="text"
                          class="form-control"
                          name=""
                          id="item-name"
                          placeholder=""
                          autofocus
                        />

                        <div class="form-control-feedback text-danger">
                          Please Add Name
                        </div>

                        <div class="form-control-feedback text-success">
                          Looks Good
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="form-group">
                        <label class="font-weight-normal h6 " for="cost">
                          Price
                        </label>
                        <input
                          formControlName="priceControlValue"
                          required
                          type="number"
                          class="form-control"
                          name=""
                          id="cost"
                          placeholder=""
                        />

                        <div class="form-control-feedback text-danger">
                          Please Add Price
                        </div>

                        <div class="form-control-feedback text-success">
                          Looks Good
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <button type="button" class="addButton btn">
                  Add
                </button>
                <div class="dropdown-divider"></div>
                <table class="table table-borderless table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Item name</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Food here</td>
                      <td>50</td>
                    </tr>
                  </tbody>
                </table>
                <div class="dropdown-divider"></div>
              </div>
              {/* shared costs table */}
              <div class="col-lg-6 col-12">
                <h6 class=" text-muted  font-weight-light mb-3">
                  This information is needed so that your users can <br /> know
                  more about you
                </h6>
                <form>
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <div class="form-group">
                        <label class="font-weight-normal h6 " for="item-name">
                          Item name
                        </label>
                        <input
                          formControlName="itemControlValue"
                          required
                          type="text"
                          class="form-control"
                          name=""
                          id="item-name"
                          placeholder=""
                          autofocus
                        />

                        <div class="form-control-feedback text-danger">
                          Please Add Name
                        </div>

                        <div class="form-control-feedback text-success">
                          Looks Good
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="form-group">
                        <label class="font-weight-normal h6 " for="cost">
                          Price
                        </label>
                        <input
                          formControlName="priceControlValue"
                          required
                          type="number"
                          class="form-control"
                          name=""
                          id="cost"
                          placeholder=""
                        />

                        <div class="form-control-feedback text-danger">
                          Please Add Price
                        </div>

                        <div class="form-control-feedback text-success">
                          Looks Good
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <button type="button" class="addButton btn">
                  Add
                </button>
                <div class="dropdown-divider"></div>
                <table class="table table-borderless table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Item name</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Food here</td>
                      <td>50</td>
                    </tr>
                  </tbody>
                </table>
                <div class="dropdown-divider"></div>
              </div>
              <div class="d-flex mt-4 twoButton">
                <button type="button" class="previous_btn btn">
                  Previous
                </button>

                <button
                  onClick={() => {}}
                  type="submit"
                  className="stepperContinueButton btn"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledStepper>
  );
}
