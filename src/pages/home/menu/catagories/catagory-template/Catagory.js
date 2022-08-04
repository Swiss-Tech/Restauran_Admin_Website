import React ,{useState} from 'react'

import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdKeyboardArrowDown ,MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { BiDotsHorizontalRounded , BiDotsVerticalRounded } from "react-icons/bi";

const StyledAccordion = styled.section`

.accordionStyle{
    background-color:red
}


`;

export default function Catagory(props) {
  const categoryController = useSelector((state)=>state.category.categories);
  const [expand , setExpand] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDropDownClicked , setDropDown] = useState();
  const open = Boolean(anchorEl);
  const [editableFile , setEditable] = useState()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   var categories = categoryController.filter((category)=>category.id!=='1' && category )
  
  return (
    <StyledAccordion >
        {categories.map((item,index)=>
          <Accordion style={{
            boxShadow:'none',
            border:'1px solid gray',
            marginTop:'10px' ,
            marginBottom:'20px'
           
            
           
            
          }} expanded={expand}  >
         <AccordionSummary
          expandIcon={<div style={{
            display:'flex',
            gap:'20px',
          }} >
          
        { categoryController.map((sub, index)=> sub.parentCategory === item.id  &&    <MdKeyboardArrowDown onClick={()=>{
           setExpand(!expand)}}/>) } 
           
          
           <DropdownButton
 
            drop={'end'} variant='Secondary'

  
  as='div' style={{
 
  color:'black'
}}
          >
         
            <Dropdown.Item eventKey="1" style={{
            
            }} onClick={()=>{
               handleClose()
          props.setIsEdit(true)
          props.setEditable(item)
      


        
         
            }}>Edit</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={ async ()=>{

               props.handleLoading(true);
              await props.handleDelete(item.id)
               props.handleLoading(false);
            
            }}> Delete</Dropdown.Item>
           
            
            
          </DropdownButton>
       
     
       
      
  
          
      
          
          </div>
          }
          aria-controls="panel1a-content"
          id="panel1a-header" style={{
             justifyContent:'space-around'
          }}
          
        >
        
         
        {   <Typography>{item.categoryName}</Typography> }
           
       
         
        </AccordionSummary>

     { categoryController.map((sub)=> sub.parentCategory === item.id && <AccordionDetails>
        
      <div style={{
            boxShadow:'none',
            border:'1px solid gray',
            display:'flex',
            justifyContent:'space-between',
            padding:'10px'
          }}>
            <Typography onClick={()=>{
               handleClose()
          props.setIsEdit(true)
          props.setEditable(sub)
            }}>{sub.categoryName}</Typography>
            <MdDelete onClick={()=>{
              props.handleDelete(sub.id)
            }}/>
          </div>
     
        </AccordionDetails>   )}
     
       
      
      </Accordion>

)}
       

    
    </StyledAccordion>
  )
}


