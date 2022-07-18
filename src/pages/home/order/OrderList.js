import React ,{useState}from "react";
import OrderTable from "./OrderTable";
import FeaturedProduct from './check'




export default function Order() {
    const[search ,setSearch] =useState();

  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">
         <div class="row">
        <div class="col">
            <h3 class="font-weight-bolder">Orders</h3>
            <p>12-12-2022</p>
            

           
        </div>
        <div class="dropdown-divider"></div>

        <div class="d-flex py-3 flex-wrap" style={{
           gap:'30px'
        }}>
      
        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 ">
            <span class="h3 mr-3 mb-0">4</span>
          pending
        </div>
      
        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3">
            <span class="h3 mr-3 mb-0">25</span>
            processing
        </div>

        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 ">
            <span class="h3 mr-3 mb-0">8</span>
            cancelled
        </div>
      
        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mb-lg-0 mb-3 ">
            <span class="h3 mr-3 mb-0">45</span>
            completed
        </div>

    </div>
    </div>


    <OrderTable/>
    </div>
  )
}
