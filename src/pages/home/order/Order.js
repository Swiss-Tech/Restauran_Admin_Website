import React ,{useState, useEffect}from "react";
import OrderTable from "./OrderTable";
import FeaturedProduct from './check'
import { orderActionCreators } from "../../../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import apiCall from "../../../ApiCall";


export default function Order() {
  const dispatch=useDispatch();
  const OrderActionController = bindActionCreators(orderActionCreators, dispatch);
  const orderController = useSelector((state)=>state.order);
  const [dataSource, setDataSource]=useState([]);
  const [dateState, setDateState] = useState(new Date());
  useEffect(()=>{
    apiCall(dispatch);
    if(orderController.orders.length===0){
      OrderActionController.getAllOrdersAction();
      
      
   
    }else
    {
      setDataSource(orderController.orders);
      
    }
    
  },[])
  useEffect(() => {
      setInterval(() => setDateState(new Date()), 30000);
    }, []);
    const [pending , setPending] = useState(0);
    const [active, setActive] = useState(0);
    const [rejected, setRejected] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [stopCalculating, setStopCalculating] = useState(false);

    useEffect( ()=>{
    
          if(dataSource.length){
            
          }{
            calculateFinal();
            setStopCalculating(true)
          }
         
          
        
        
      
    },[dataSource.length])



    async function  calculateFinal (){
      if(dataSource.length !==0) {
       dataSource.map((order)=>{
  
         if(  order['status'] === 0){
         setPending(pending+1);
         
         
         }
         if(order['status'] === 1){
          setActive(active+1);
   
         }
         if(order['status'] === 5){
          setRejected(rejected+1);
         }
         if(order['status'] === 2){
          setCompleted(completed+1);
         }
         
         }
         
         
         )
         
       
      }
      
     
   
   
     
  
   
      }
  return (
   
<div  className="container-fluid px-lg-5 px-2 pt-5 position-relative" style={{
  
  }}>
         <div className="row">
        <div className="col">
            <h3 className="font-weight-bolder">Orders</h3>
            <p style={{
              color:'gray'
            }}> {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>
            

           
        </div>
        <div className="dropdown-divider"></div>

        <div className="orderTotal " style={{
          gap:'40px',
         display:'flex',
         marginBottom:'20px',
         

          
        }}>
      
        <div
            className="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 ">
            <span className="h3 mr-3 mb-0 " style={{
              marginRight:"10px",
            
            }}>{pending}</span>
          Pending
        </div>
      
        <div
            className="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3">
            <span className="h3 mr-3 mb-0 ml-16 " style={{
              marginRight:"10px"
            }}>{active}</span>
            Active
        </div>

        <div
            className="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 ">
            <span className="h3 mr-3 mb-0" style={{
              marginRight:"10px"
            }}>{rejected}</span>
            Rejected
        </div>
      
        <div
            className="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mb-lg-0 mb-3 ">
            <span className="h3 mr-3 mb-0" style={{
              marginRight:"10px"
            }}>{completed}</span>
            Completed
        </div>

    </div>
    </div>


    <OrderTable />
    </div>
  
  )
}
