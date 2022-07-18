import React from 'react'

export default function Pagination({ordersPerPage, totalOrders, paginate,currentPage}) {
    const pageNumbers =[];
    for(let i=1 ; i<= Math.ceil(totalOrders/ordersPerPage); i++)
    {
        pageNumbers.push(i);
    }
  return (
    <div style={{
        display:'flex'
    }}>
    <button onClick={()=>{
        if(currentPage!==1)
        {
            paginate(currentPage-1)
        }
        
    }}>previous</button>
        <nav >

            <ul className='pagination'>
                {
                    pageNumbers.map(number=>
                    <li key={number} className='page-item'>
                       <a onClick={()=>paginate(number)} className='page-link'> {number}</a>
                    </li>
                    )
                }
            </ul>
        </nav>
        <button onClick={()=>{
        if(currentPage !== pageNumbers.length  )
        {
            paginate(currentPage+1)
        }
        
    }}>next</button>
    </div>
  )
}
