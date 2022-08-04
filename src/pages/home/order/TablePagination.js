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
        justifyContent:'end'
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
        <nav >

            <ul className='pagination' >
                {
                    pageNumbers.map(number=>
                    <li  key={number} >
                       <a  onClick={()=>paginate(number)} ><div style={{
                        width:'40px',
                        height:'20px',
                        border:'1px solid black'
                       }}> {number}</div></a>
                    </li>
                    )
                }
            </ul>
        </nav>
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
