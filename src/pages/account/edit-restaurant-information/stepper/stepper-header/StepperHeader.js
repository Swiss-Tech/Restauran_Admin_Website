import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export default function StepperHeader(props) {
  return (
    <div>
      <div className=" d-flex py-2  ">
        <div className="ml-2 d-flex flex-column justify-content-center">
          <h6 className="text-muted">Step {props.stepNumber}</h6>
          <h5 className="">{props.stepTitle}</h5>
        </div>
      </div>
    </div>
  );
}
