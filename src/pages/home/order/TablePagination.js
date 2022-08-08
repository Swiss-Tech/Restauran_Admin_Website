import React from 'react'
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from 'react-icons/md';
export default function Pagination({ordersPerPage, totalOrders, paginate,currentPage}) {
    const pageNumbers =[];
    for(let i=1 ; i<= Math.ceil(totalOrders/ordersPerPage); i++)
    {
        pageNumbers.push(i);
    }
  return (
    <div style={{
        display:'flex',
        justifyContent:'end',
        
    }}>
    <button className='customShadow' onClick={()=>{
        if(currentPage!==1)
        {
            paginate(currentPage-1)
        }

        
    }} style={{
        border:'none',
        backgroundColor:'transparent',
        width:'3%',
       
    }}><MdKeyboardArrowLeft size={20}/></button>



         
                {
                    pageNumbers.map((number, index)=>
                    
                   
                        <button className='customShadow' onClick={()=>paginate(number)} style={{
        border:currentPage === number ?'2px solid orange' : '1px solid black',
        color:currentPage === number ?' orange' : 'black',
        backgroundColor:'transparent',
        width:'3%',
        marginLeft:'10px',
        marginRight:'10px'

       
    }}>{number}</button>
                  
                    )
                }
         
       

        <button className='customShadow' onClick={()=>{
        if(currentPage !== pageNumbers.length  )
        {
            paginate(currentPage+1)
        }
        
    }}  style={{
        border:'none',
        backgroundColor:'transparent',
        width:'3%',
       
    }}><MdKeyboardArrowRight /></button>
    </div>
  )
}
