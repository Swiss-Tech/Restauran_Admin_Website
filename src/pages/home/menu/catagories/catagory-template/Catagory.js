import React from 'react'

import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdKeyboardArrowDown ,MdDelete } from "react-icons/md";



const StyledAccordion = styled.section`

.accordionStyle{
    background-color:red
}

`;

export default function Catagory() {
  return (
    <StyledAccordion>
    <Accordion style={{
            boxShadow:'none',
            border:'1px solid gray'
          }}>
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Accordion style={{
            boxShadow:'none',
            border:'1px solid gray'
          }}>
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>FastFood</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{
            boxShadow:'none',
            border:'1px solid gray',
            display:'flex',
            justifyContent:'space-between',
            padding:'10px'
          }}>
            <Typography>Burger</Typography>
            <MdDelete/>
          </div>
        </AccordionDetails>
      </Accordion>
     
        </AccordionDetails>
      </Accordion>
      <Accordion style={{
            boxShadow:'none',
            border:'1px solid gray',
            marginTop:'10px'
          }}>
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Accordion style={{
            boxShadow:'none',
            border:'1px solid gray'
          }}>
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>FastFood</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{
            boxShadow:'none',
            border:'1px solid gray',
            display:'flex',
            justifyContent:'space-between',
            padding:'10px'
          }}>
            <Typography>Burger</Typography>
            <MdDelete/>
          </div>
        </AccordionDetails>
      </Accordion>
     
        </AccordionDetails>
      </Accordion>

    
    </StyledAccordion>
  )
}


