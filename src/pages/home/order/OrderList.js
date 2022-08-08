import React ,{useState, useEffect}from "react";
import OrderTable from "./OrderTable";
import FeaturedProduct from './check'
import { orderActionCreators } from "../../../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";


export default function Order() {
  const dispatch=useDispatch();
  const OrderActionController = bindActionCreators(orderActionCreators, dispatch);
  const orderController = useSelector((state)=>state.order);
  const [dataSource, setDataSource]=useState([]);
  const [dateState, setDateState] = useState(new Date());
  useEffect(()=>{
    if(orderController.orders.length===0){
      OrderActionController.getAllOrdersAction();
      
      setDataSource(orderController.orders);
   
    }
    {
      setDataSource(orderController.orders);
      
    }
    
  })
  useEffect(() => {
      setInterval(() => setDateState(new Date()), 30000);
    }, []);
    const [pending , setPending] = useState(0);
    const [active, setActive] = useState(0);
    const [rejected, setRejected] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [stopCalculating, setStopCalculating] = useState(false);
    useEffect( ()=>{
      if( stopCalculating === false){
         calculateFinal(); 
        
      }
    },  )
    async function  calculateFinal (){
      if(dataSource.length !==0){
       dataSource.map((order)=>{
         if(  order['status'].toLowerCase() === "pending"){
         setPending(pending+1);
         }
         if(order['status'].toLowerCase() === "active"){
          setActive(active+1);
   
         }
         if(order['status'].toLowerCase() === "rejected"){
          setRejected(rejected+1);
         }
         if(order['status'].toLowerCase() === "completed"){
          setCompleted(completed+1);
         }
         
         }
         
         )
         setStopCalculating(true)
      }
   
   
     
   
   
      }
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
            }}>{pending}</span>
          Pending
        </div>
      
        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3">
            <span class="h3 mr-3 mb-0 ml-16 " style={{
              marginRight:"10px"
            }}>{active}</span>
            Active
        </div>

        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 ">
            <span class="h3 mr-3 mb-0" style={{
              marginRight:"10px"
            }}>{rejected}</span>
            Rejected
        </div>
      
        <div
            class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mb-lg-0 mb-3 ">
            <span class="h3 mr-3 mb-0" style={{
              marginRight:"10px"
            }}>{completed}</span>
            Completed
        </div>

    </div>
    </div>


    <OrderTable/>
    </div>
  )
}
