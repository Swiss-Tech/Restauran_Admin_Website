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
import { StyledEngineProvider } from "@mui/material/styles";
import { ImagePicker ,RestaurantImage} from "./Image_Picker";
import StepperLableIcon from "./stepper-header/StepperLableIcon";
import RestaurantInformationModel from "../../../models/RestaurantInformation_Model";
import SharedCost from "../../../models/SharedCost";
import { restaurantInformation } from "../../../actions/account";
import { accountActionCreators } from "../../../actions";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../reusable-components/Loader";
export default function StepperPage(props) {
  
 
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
      days: [...days, e.target.id],
    
    });

  
  }
  // Case 2  : The user unchecks the box
  else {
    setWorkingDays({
      days: days.filter((e) => e !== value),
    });
  }
 
};





 const [sharedCosts, setSharedCosts] = useState([]);
const handleSharedCost =( sharedCost)=>{
  
  

  if(sharedCost.isPercent){
       setSharedCosts([...sharedCosts , new SharedCost(sharedCost.itemName, sharedCost.isPercent, sharedCost.value)]);
  }
  else{
      setSharedCosts([...sharedCosts , new SharedCost(sharedCost.itemName, sharedCost.isPercent, sharedCost.value)]);
  }
}

const [itemName , setItemName] = useState();
const [itemValue, setItemValue] = useState();
const [itemNameByPercent , setItemNameByPercent] = useState();
const [itemValueByPercent, setItemValueByPercent] = useState();

const  stepOneValidation=()=>{
  if( !restaurantEmail || !logoUrl || !restaurantName  || !restaurantNumber  || !restaurantLocation || !restaurantDescription ){
    return false;
    
  }
  else{
    return true;
  }
 }
const stepTwoValidation =()=>{
  if(workingDays.days.length > 0 && openAt && closeAt){
    return true;

  }
  else{
    return false;
  }
}

const stepThreeValidation =()=>{
  if(restaurantImage1 && restaurantImage2 && restaurantImage3 && restaurantImage4){

    return true;
  }
  else{
    return false;
  }
}



const dispatch = useDispatch();
const ActionController = bindActionCreators(accountActionCreators, dispatch);


  return ( 
          <StyledStepper>
    <StyledEngineProvider injectFirst>
  <Stepper
activeStep={activeStep}
    orientation="vertical"
    className="stepper container"
    >
  {/* step 1 */}
  <Step>

   <StepLabel icon={<StepperLableIcon activeStep={activeStep} step={1}/>}><StepperHeader stepNumber={1} stepTitle={"Basic Infromation"} /></StepLabel>
   <StepContent>           
  <form>
  <div className="row bg-white py-4">
    <div className="col-lg-4">
    <ImagePicker handleClick={setLogoUrl} imageUrl={logoUrl}  id={"logo"}  />
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
    <input required type="text" className="form-control" name="" 
                                id="location"  onChange={(e) => setRestaurantLocation(e.target.value)}  />


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

  <div className="col-lg-8 mt-3" style={{
    marginBottom:'20px'
  }}>
                <div className="form-group">
                    <label className="font-weight-normal h6 " htmlFor="description" style={{
                        marginBottom:'20px'
                    }}>
                      Short Description
                    </label>
                    <textarea
                      required
                      type="text"
                      rows="4"
                      className="form-control"
                      name=""
                      formcontrolname="shortDescription"
                      id="description"

                      onChange={(e) => setRestaurantDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
 

  
  
  </form>
  <div>
                <button
                  onClick={() => {
                    
                    if(stepOneValidation()){
                      handleNext();
                    }
                    
                    
                    
                  }}
                 
                  className="stepperContinueButton"
                >
                  Continue
                </button>
              </div>
      

           
        </StepContent>
  </Step>

{/* step 2 */}
  <Step>
  <StepLabel icon={
 <StepperLableIcon activeStep={activeStep} step={2}/>} >
    <StepperHeader stepNumber={2} stepTitle={"Working Days and Hours"} /></StepLabel>
    
    <StepContent>
    <div className="dropdown-divider "></div>
    
    <div id="step_2">
    
            
            <div className="row bg-white py-4">
            
              <div className="col-lg-6 ">
          
                  <h6>Dates</h6>
             
                  <form> 
                    <div className="row" style={{ display: "flex" , marginBottom:'5px'}}>
                      <ul>
                        {days.map((element) => (
                          
                          <li key={element}>

                         
                            <input
                              type="checkbox"
                              id={element}
                              name="workingDay"
                             
                              onChange={handleWorkingDaysChange}
                            
                      
                            />
                            <label htmlFor={element} onClick={()=>{

                            
                        
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
               
                
                  <div className="row" style={{
                    marginBottom:'5px',
                    marginTop:'10px'
                  }}>
                    <div className="col-lg-6 col-12">
                      <h6 className="mb-3">Open at</h6>

                      <div>
                      
                        <input type="time"  defaultValue="10:00" onChange={(e)=>setOpetAtTime(e.target.value)}/>
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
                        <input type="time" defaultValue="10:00" onChange={(e)=>setColseAtTime(e.target.value)} />
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
                if(stepTwoValidation()){
                  handleNext();
                }
                 
                  
                }}
               
                className="stepperContinueButton"
              >
                Next
              </button>
            </div>
          </div>
    </StepContent>
  </Step>
  {/* step 3 */}
  <Step>
    <StepLabel icon={<StepperLableIcon activeStep={activeStep} step={3}/>}>
    
    <StepperHeader stepNumber={3} stepTitle={"Restaurant Images"} />
    </StepLabel>
    <StepContent>
<div id="step_4">
<div className="dropdown-divider"></div>
<div className="row" style={{
  justifyContent:'space-evenly'
}}>
<RestaurantImage
              handleClick={setRestarantImage1}
              imageUrl={restaurantImage1}
              id={"restaurantImage1"}
            />
           <RestaurantImage
              handleClick={setRestarantImage2}
              imageUrl={restaurantImage2}
              id={"restaurantImage2"}
            />
            <RestaurantImage
              handleClick={setRestarantImage3}
              imageUrl={restaurantImage3}
              id={"restaurantImage3"}
            />
            <RestaurantImage
              handleClick={setRestarantImage4}
              imageUrl={restaurantImage4}
              id={"restaurantImage4"}
            />


</div>
<div className="d-flex mt-4 twoButton">
            <button  className="previous_btn  " onClick={()=>{
             
            handleBack();
            }}>
              Previous
            </button>

            <button  className="stepperContinueButton" onClick={()=>{
             
               if(stepThreeValidation()){
              
                handleNext();
               }
              
            }}>
              Finish
            </button>
          </div>
</div>
    
    
    </StepContent>
  </Step>


  
  </Stepper>
  </StyledEngineProvider>
  <Paper style={(activeStep===3)?{}:{
    display:'none'
  }} square elevation={0} sx={{ p: 3 }}>
      <Typography  >All steps completed - you&apos;re finished</Typography>
      <button  sx={{ mt: 1, mr: 1 }}  className="stepperContinueButton " onClick={ async ()=>{
        props.setLoading(true);
       await ActionController.restaurantInformation( restaurantName, restaurantLocation, restaurantNumber, restaurantEmail, restaurantDescription, logoUrl, restaurantImage1, restaurantImage2, restaurantImage3, restaurantImage4, workingDays , sharedCosts, openAt, closeAt);
  
        props.setLoading(false)
        props.setModal(true);
      }}>
        Finish
      </button>
    </Paper>
  
{/*   
</Box> */}

      
      

    </StyledStepper>
    
  );
}
