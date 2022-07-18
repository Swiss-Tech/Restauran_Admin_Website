import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";

import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { stepIconClasses } from "@material-ui/core/StepIcon";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import styled from "styled-components";
import StepperHeader from "../stepper/stepper-header/StepperHeader";
const stepper = styled.section`
backgroundColor:black;
color:white;

`;
export function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const isStepFailed = (step) => {
    return step === 1;
  };
  
  return (
    <Box >

    
    <StyledEngineProvider injectFirst>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="stepper"
        
       
      >
      <Step>
       <StepLabel></StepLabel>
        <StepContent>
              <Typography>hey descrption</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                  Next
                    {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                  </Button>
                  <Button
                  
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
      </Step>
      <Step>
        <StepLabel>
          Hello
        </StepLabel>
        <StepContent>
              <Typography>hey descrption</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                  Next
                    {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                  </Button>
                  <Button
                  
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
      </Step>
        
      </Stepper>
      </StyledEngineProvider>
      {/* {activeStep === steps.length && ( */}
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Finish
          </Button>
        </Paper>
      
    </Box>
  );
}


