import styled from "styled-components";
import { device } from "../../../../Size";
export const StyledStepper = styled.section`


width:100%;
height:100%;
.MuiStepper-root {

  ${'' /* margin-left:10%; */}
  margin:0;
  padding:0;
  width:100%;

}



.progressNumberIndicator{
    background-color:${({theme})=>theme.colors.primary} ;
    border-radius:50% ;
    color:black;
    width:40px;
    height:40px;
}
.imagePicker{
    width:400px;
    height:200px;    
    position: relative;
    background-color:#FFF0D4;
    border-radius:20px ;
    margin:10px;
   

  
   

    
     
  
}
.restaurantImagePicker{
    width:300px;
    height:200px;    
    position: relative;
    background-color:#FFF0D4;
    border-radius:20px ;
    margin-right:10px;
   
    
     
  
}

img{
    position:absolute;
height:100%;
width:100%;
border-radius:20px ;
border:none;
}
.stepperContinueButton{
    background-color:${({theme})=>theme.colors.border} ;
        color:white ;     
        border:none ;
        font-weight :700;
        height:50px;
        margin:10px;
        border-radius:15px;
        border:none;
        width:10%;

        
        &:hover{
        background-color:#f8f8f8 ;
        color:black ;
        border:none;
        }

}
.imageTag{
    max-width:100%;
max-height:100%;
display: block;

}
.centbutton{
    position: absolute;
    background-color:${({theme})=>theme.colors.border} ;
    bottom:20px;
    right:20px;
   
}

ul {
  padding: 0;
  margin: 0;
  clear: both;
}

li{
  list-style-type: none;
  /* list-style-position: outside; */
  padding: 10px;
  float: left;
}

input[type="checkbox"]:not(:checked), 
input[type="checkbox"]:checked {
  position: absolute;
  left: -9999%;
}

input[type="checkbox"] + label {
    width: 50px;
    align-items:center ;
    justify-content:center ;
    text-align:center;
    border-radius:10px ;
    background-color: #f8f8f8;
    color:black;
    font-weight:700 ;
    border:none;
  /* display: inline-block; */
  padding: 10px;
  cursor: pointer;
 color: black;
  margin-bottom: 10px;
 
}

input[type="checkbox"]:checked + label {
 
  color: white;
  background-color:${({theme})=>theme.colors.primary};
}



.previous_btn{
  margin-right:30px ;
    background-color: #f8f8f8;
        color:black ;     
        border:none ;
        font-weight :700;
        height:50px;
       margin:10px;
        border-radius:15px;
       
        border:none;
        width:10%;

        
        &:hover{
            background-color:black ;
        color:#f8f8f8 ;
        }
}

.twoButton{
  
}

.multipleImages{
  display:flex ;
  flex-direction:row ;
  justify-content:space-evenly ;
  
}
.addButton{
  
  background-color: ${({theme})=>theme.colors.primary};
  color:white;
 
       
        border:none ;
        font-weight :700;
        height:45px;
        width:20%;
        border-radius:10px;

        
        &:hover{
          
        }
}


@media (max-width: 450px) {
     
  .imagePicker{
   width:95%; 
}

.stepperContinueButton{
    
        width:40%;

        
      

}

.previous_btn{
        width:40%;

        
       
}
.restaurantImagePicker{

}

  }

`;
 