import React,{useEffect , useState } from 'react'

import OrderTable from '../order/OrderTable'
import CustomerTable from './CustomerTable';
import { customerActionCreators } from '../../../actions';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import apiCall from '../../../ApiCall';
export default function Customers() {
  const dispatch = useDispatch();
  const CustomerActionController = bindActionCreators(customerActionCreators, dispatch);
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
    apiCall(dispatch);

  }, []);



 

 
 
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">
         <div class="row">
        <div class="col">
          
            <h3 class="font-weight-bolder">Customers</h3>
            
            <p style={{
              color:'gray'
            }}> {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>
        </div>

    </div>
    <div class="dropdown-divider"></div>
    <CustomerTable/>
    
    </div>
  )
}
