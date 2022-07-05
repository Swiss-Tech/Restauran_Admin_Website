import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export default function StepperHeader(props) {
  return (
    <div>
      <div class=" d-flex py-2  ">
        <div class="ml-2 d-flex flex-column justify-content-center">
          <h6 class="text-muted">Step {props.stepNumber}</h6>
          <h5 class="">{props.stepTitle}</h5>
        </div>
      </div>
    </div>
  );
}
