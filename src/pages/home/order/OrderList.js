import React ,{useState, useEffect}from "react";
import OrderTable from "./OrderTable";
import FeaturedProduct from './check'




export default function Order() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
      setInterval(() => setDateState(new Date()), 30000);
    }, []);
  
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">
         <div class="row">
        <div class="col">
            <h3 class="font-weight-bolder">Orders</h3>
            <p style={{
              color:'gray'
            }}> {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>
            

           
        </div>
        <div class="dropdown-divider"></div>

        <div class="d-flex py-3 flex-wrap" style={{
           gap:'30px'
        }}>
      
        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 ">
            <span class="h3 mr-3 mb-0 " style={{
              marginRight:"10px"
            }}>4</span>
          Pending
        </div>
      
        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3">
            <span class="h3 mr-3 mb-0 ml-16 " style={{
              marginRight:"10px"
            }}>25</span>
            Processing
        </div>

        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 ">
            <span class="h3 mr-3 mb-0" style={{
              marginRight:"10px"
            }}>8</span>
            Cancelled
        </div>
      
        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mb-lg-0 mb-3 ">
            <span class="h3 mr-3 mb-0" style={{
              marginRight:"10px"
            }}>45</span>
            Completed
        </div>

    </div>
    </div>


    <OrderTable/>
    </div>
  )
}
