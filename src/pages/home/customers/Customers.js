import React from 'react'
import OrderTable from '../order/OrderTable'

export default function Customers() {
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">
         <div class="row">
        <div class="col">
          
            <h3 class="font-weight-bolder">Customers</h3>
            
            <p>12/12/2012</p>
        </div>

    </div>
    <div class="dropdown-divider"></div>
    <OrderTable/>
    
    </div>
  )
}
