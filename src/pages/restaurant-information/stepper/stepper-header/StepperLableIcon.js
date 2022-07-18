import React from 'react'
import { MdDone } from "react-icons/md";
export default function StepperLableIcon(props) {
  return (
    <div className="circleAvatar" style={{
        height: '25px',
      width: '25px',
      backgroundColor: "#FECB16",
      borderRadius: "50%",
      display: 'inline-block',
      textAlign:"center",
      color:"white",
      fontSize:"15px",
      fontWeight:'700'
    
       }}> {props.activeStep + 1   === props.step ?  props.step: props.activeStep + 1 < props.step ? props.step:  <MdDone/> }</div> 
  )
}
