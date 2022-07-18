import React, {  useState, useEffect} from "react";
import StepperHeader from "./stepper-header/StepperHeader";
import { StyledStepper } from "./styled/StyledStepper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { StyledEngineProvider } from "@mui/material/styles";
import { ImagePicker ,RestaurantImage} from "./Image_Picker";
import StepperLableIcon from "./stepper-header/StepperLableIcon";



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
  const isStepFailed = (step) => {
    return step === 1;
  };
  // step1 form
  const [restaurantName, setRestaurantName] = useState();
  const [restaurantNumber, setRestaurantNumber] = useState();
  const [restaurantEmail, setRestaurantEmail] = useState();
  const [restaurantLocation, setRestaurantLocation] = useState();
  const [restaurantDescription, setRestaurantDescription] = useState();
  // step 2
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

 const  stepOneValidation=()=>{
  if( !restaurantEmail || !logoUrl || !restaurantName  || !restaurantNumber  || !restaurantLocation  ){
    return false;
    
  }
  else{
    return true;
  }
 }
  
 const [workingDays, setWorkingDays] = useState({
  days :[]
});

const handleWorkingDaysChange = (e) => {
  // Destructuring
  const { value, checked } = e.target;
  const { days } = workingDays;
  // Case 1 : The user checks the box
  if (checked) {
    setWorkingDays({
      days: [...days, value],
    
    });
  }
  // Case 2  : The user unchecks the box
  else {
    setWorkingDays({
      days: days.filter((e) => e !== value),
    });
  }
 
};

 const [sharedCosts, setSharedCosts] = useState({
      costByPercent :[],
      costByValue:[]

 });
const handleSharedCost =( isPercent,item)=>{
  
  const {name , price} = item;
 const { costByPercent } = sharedCosts;


  if(isPercent){
        setSharedCosts({
          costByPercent: [...costByPercent, {name,price}],
        
        })
  }
  else{
console.log("by value");
  }
}

const [itemName , setItemName] = useState();
const [itemPrice, setItemPrice] = useState();

  return (
    <StyledStepper>
    <StyledEngineProvider injectFirst>
  <Stepper
activeStep={activeStep}
    orientation="vertical"
    className="stepper container">
  {/* step 1 */}
  <Step>

   <StepLabel icon={<StepperLableIcon activeStep={activeStep} step={1}/>}><StepperHeader stepNumber={1} stepTitle={"Basic Infromation"} /></StepLabel>
   <StepContent>           
  <form>
  <div className="row bg-white py-4">
    <div className="col-lg-4">
    <ImagePicker handleClick={setLogoUrl} imageUrl={logoUrl}  id={"logo"} />
    <div className="form-control-feedback text-danger" style={(logoUrl)?{
                    display:'none'
                  }:{}}>
                    Restaurant Logo is required
                  </div>
    </div>
     <div className="col-lg-4  justify-content-between d-flex flex-column">
     {/* restaurant name */}
    <div className="form-group">
    <label className="font-weight-normal h6 " htmlFor="restaurant-name">
                      Resturant Name
                    </label>
                    <input
                    
                      type="text"
                      className="form-control"
                      name="restaurantName"
                      id="restaurant-name"
                      value={restaurantName}
                      required
                      onChange={(e) => setRestaurantName(e.target.value)}
                    />    
                    <div className="form-control-feedback text-danger" style={(restaurantName)?{
                    display:'none'
                  }:{}}>
                    Restaurant Name is required
                  </div>
                  {/* <!-- feedback message valid--> */}
                  <div className="form-control-feedback text-success" style={(restaurantName)?{
                    
                  }:{display:'none'}}>
                    Looks Good
                  </div>
                   </div>

                   {/* restaurant phone number */}
                   <div className="form-group">
                    <label className="font-weight-normal h6 " htmlFor="phone-number">
                      Phone number
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      formcontrolname="phoneNumber"
                      name="phoneNumber"
                      id="phone-number"
                      value={restaurantNumber}
                      onChange={(e) => setRestaurantNumber(e.target.value)}
                    />
                    <div className="form-control-feedback text-danger" style={(restaurantNumber)?{
                    display:'none'
                  }:{}}>
                    Restaurant Phone Number is required
                  </div>
                  {/* <!-- feedback message valid--> */}
                  <div className="form-control-feedback text-success" style={(restaurantNumber)?{
                    
                  }:{display:'none'}}>
                    Looks Good
                  </div>
                  </div>
    </div>
    <div className="col-lg-4  justify-content-between d-flex flex-column">

    {/* location */}
    <div className="form-group">
    <label className="font-weight-normal h6 " htmlFor="phone-number">
                      Location
                    </label>
    <input required type="text" class="form-control" name="" 
                                id="location" value={ restaurantLocation } onChange={(e) => setRestaurantLocation(e.target.value)}  />


<div className="form-control-feedback text-danger" style={(restaurantLocation)?{
                    display:'none'
                  }:{}}>
               Restaurant Location is required
                  </div>
                  {/* <!-- feedback message valid--> */}
                  <div className="form-control-feedback text-success" style={(restaurantLocation)?{
                    
                  }:{display:'none'}}>
                    Looks Good
                  </div>

                   
                 
                  
                  
                  </div>

                  {/* email */}
                  <div className="form-group">
                    <label className="font-weight-normal h6 " htmlFor="email">
                      Email
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name=""
                      formcontrolname="email"
                      id="email"
                      placeholder=""
                      value={restaurantEmail}
                      onChange={(e) => setRestaurantEmail(e.target.value)}
                    />
                    <div className="form-control-feedback text-danger" style={(restaurantEmail )?{
                    display:'none'
                       }:{}}>
                    Restaurant Email is required
                  </div>
                  {/* <!-- feedback message valid--> */}
                  <div className="form-control-feedback text-success" style={(restaurantEmail)?{
                    
                  }:{display:'none'}}>
                    Looks Good
                  </div>
                  </div>
    </div>
  </div>

  <div class="col-lg-8 mt-3">
                <div className="form-group">
                    <label className="font-weight-normal h6 " htmlFor="description">
                      Short Description
                    </label>
                    <textarea
                      required
                      type="text"
                      rows="3"
                      className="form-control"
                      name=""
                      formcontrolname="shortDescription"
                      id="description"
                     value={ restaurantDescription } 
                      onChange={(e) => setRestaurantDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
 

  
  
  </form>
  <div>
                <button
                  onClick={() => {
                    handleNext();
                    // if(stepOneValidation()){
                    //   handleNext();
                    // }
                    
                    
                    
                  }}
                 
                  className="stepperContinueButton btn"
                >
                  Continue
                </button>
              </div>
      

           
        </StepContent>
  </Step>

  <Step>
  <StepLabel icon={
 <StepperLableIcon activeStep={activeStep} step={2}/>} >
    <StepperHeader stepNumber={1} stepTitle={"Basic Infromation"} /></StepLabel>
    
    <StepContent>
    <div id="step_2">
            <div className="dropdown-divider"></div>
            <div className="row bg-white py-4">
              <div className="col-lg-6 bg-">
                <form>
                  <h6>Dates</h6>
             
                  <form>
                    <div className="row" style={{ display: "flex" }}>
                      <ul>
                        {days.map((element) => (
                          
                          <li>

                         
                            <input
                              type="checkbox"
                              id={element}
                              name="workingDay"
                              value={element}
                              onChange={handleWorkingDaysChange}
                            
                      
                            />
                            <label for={element} onClick={()=>{

                            
                             
                              // setWorkingDays.push(element);
                              // console.log(workingDays.length);
                            }}>{element[0]}</label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="form-control-feedback text-danger" style={( workingDays.days.length > 0)?{

display:'none'
                    }:{
                    }}>
                      Please Pick Work Days
                    </div>
                    <div className="form-control-feedback text-success" style={(workingDays.days.length > 0 )?{
                     
                    }:{
                      display:'none'
                    }}>
                      Looks Good
                    </div>
                  </form>
                  <div className="dropdown-divider my-4"></div>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <h6 className="mb-3">Open at</h6>

                      <div>
                      
                        <input type="time"   onChange={setOpetAtTime}/>
                      </div>

                     

                      <div className="form-control-feedback text-danger" style={( openAt) ? {
                        display:'none'
                      }:{}}>
                        Please Add time
                      </div>

                      <div className="form-control-feedback text-success" style={( openAt ) ?{}:{
                        display:'none'
                      }}>
                        Looks Good
                      </div>
                    </div>

                    <div className="col-lg-6 mt-lg-0 mt-4">
                      <h6 className="mb-3">Closes At</h6>
                      <div>
                        <input type="time" onChange={setColseAtTime} />
                      </div>
                     
                      
                      <div className="form-control-feedback text-danger" style={(closeAt) ?{
                        display:'none'
                      }:{}}>
                        Please Add time
                      </div>

                      <div className="form-control-feedback text-success" style={(closeAt) ?{

                      }:{
                        display:'none'
                      }}>
                        Looks Good
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex mt-4 twoButton">
              <button type="button" className="previous_btn btn" onClick={()=>{
              
                handleBack();
               
              }}>
                Previous
              </button>

              <button
                onClick={() => {
                  //  moveToStep2()
                  // !step1Collapsed
                  handleNext();
                  console.log(restaurantName);
                }}
                type="submit"
                className="stepperContinueButton btn"
              >
                Next
              </button>
            </div>
          </div>
    </StepContent>
  </Step>
  <Step>
    <StepLabel icon={<StepperLableIcon activeStep={activeStep} step={3}/>}>
    
    <StepperHeader stepNumber={3} stepTitle={"Restaurant Images"} />
    </StepLabel>
    <StepContent>
<div id="step_4">
<div class="row" >
  <div class="col-sm" style={{
    padding:0,
    margin:0
  }}><RestaurantImage
              handleClick={setRestarantImage1}
              imageUrl={restaurantImage1}
              id={"restaurantImage1"}
            /></div>
  <div class="col-sm" style={{
    padding:0,
    margin:0
  }}> <RestaurantImage
              handleClick={setRestarantImage2}
              imageUrl={restaurantImage2}
              id={"restaurantImage2"}
            /></div>
  <div class="col-sm" style={{
    padding:0,
    margin:0
  }}><RestaurantImage
              handleClick={setRestarantImage3}
              imageUrl={restaurantImage3}
              id={"restaurantImage3"}
            /></div>
  <div class="col-sm" style={{
    padding:0,
    margin:0
  }}><RestaurantImage
              handleClick={setRestarantImage4}
              imageUrl={restaurantImage4}
              id={"restaurantImage4"}
            /></div>
</div>
<div className="d-flex mt-4 twoButton">
            <button type="button" className="previous_btn btn " onClick={()=>{
             
            handleBack();
            }}>
              Previous
            </button>

            <button type="button" className="stepperContinueButton" onClick={()=>{
               // validation
              handleNext();
            }}>
              Next
            </button>
          </div>
</div>
    
    
    </StepContent>
  </Step>
  <Step>
    <StepLabel icon={<StepperLableIcon activeStep={activeStep} step={4}/>}>
    <StepperHeader stepNumber={4} stepTitle={"Shared Costs"} />
    </StepLabel>
    <StepContent>
    <div id="step4">
            <div className="dropdown-divider"></div>
            <div className="row bg-white py-4">
              <div className="col-lg-6 col-12">
                <h6 className=" text-muted  font-weight-light mb-3">
                  This information is needed so that your users can <br /> know
                  more about you
                </h6>
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label className="font-weight-normal h6 " htmlFor="item-name">
                          Item name
                        </label>
                        <input
                          formcontrolname="itemControlValue"
                          required
                          type="text"
                          className="form-control"
                          name=""
                          id="itemName"
                          placeholder=""
                          autofocus
                          onChange={(e)=> setItemName(e.target.value) } 

                        />

                        <div className="form-control-feedback text-danger">
                          Please Add Name
                        </div>

                        <div className="form-control-feedback text-success">
                          Looks Good
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label className="font-weight-normal h6 " htmlFor="cost">
                          Price
                        </label>
                        <input
                          formcontrolname="priceControlValue"
                          required
                          type="number"
                          className="form-control"
                          name=""
                          id="itemCost"
                          placeholder=""
                          onChange={(e)=> setItemPrice(e.target.value) } 
                        />

                        <div className="form-control-feedback text-danger">
                          Please Add Price
                        </div>

                        <div className="form-control-feedback text-success">
                          Looks Good
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <button type="button" className="addButton btn" onClick={()=>{
     
                 handleSharedCost(true,{name:itemName,"price":itemPrice});
                }}>
                  Add
                </button>
                <h2>{sharedCosts.costByPercent}</h2>
                <div className="dropdown-divider"></div>
                
                <table className="table table-borderless table-sm">
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
                <div className="dropdown-divider"></div>
              </div>
              {/* shared costs table */}
              <div className="col-lg-6 col-12">
                <h6 className=" text-muted  font-weight-light mb-3">
                  This information is needed so that your users can <br /> know
                  more about you
                </h6>
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label className="font-weight-normal h6 " htmlFor="item-name">
                          Item name
                        </label>
                        <input
                          formcontrolname="itemControlValue"
                          required
                          type="text"
                          className="form-control"
                          name=""
                          id="item-name"
                          placeholder=""
                          autofocus
                        />

                        <div className="form-control-feedback text-danger">
                          Please Add Name
                        </div>

                        <div className="form-control-feedback text-success">
                          Looks Good
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label className="font-weight-normal h6 " htmlFor="cost">
                          Price
                        </label>
                        <input
                          formcontrolname="priceControlValue"
                          required
                          type="number"
                          className="form-control"
                          name=""
                          id="cost"
                          placeholder=""
                        />

                        <div className="form-control-feedback text-danger">
                          Please Add Price
                        </div>

                        <div className="form-control-feedback text-success">
                          Looks Good
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <button onClick={()=>{
                  handleSharedCost(true,{name:document.getElementById('item-name').value,"price":document.getElementById('cost').value});
                }} type="button" className="addButton btn">
                  Add
                </button>
                <div className="dropdown-divider"></div>
                <table className="table table-borderless table-sm">
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
                <div className="dropdown-divider"></div>
              </div>
              <div className="d-flex mt-4 twoButton">
                <button type="button" className="previous_btn btn" onClick={()=>{
                  handleBack();
                }}>
                  Previous
                </button>

                <button
                  onClick={() => {
                    handleNext();
                  }}
                  type="submit"
                  className="stepperContinueButton btn"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
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
{/*   
</Box> */}

      
      

    </StyledStepper>
  );
}
