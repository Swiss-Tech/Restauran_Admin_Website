import React , {  useEffect, useState}from 'react'
//import { Dropdown } from 'react-bootstrap';

import Pagination from './TablePagination';
import OrderDetail from './orderDetail/OrderDetail';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { messageActionCreators } from '../../../actions';
import { BsSearch } from 'react-icons/bs';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styled from 'styled-components';

import { orderActionCreators } from '../../../actions';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import Loader from '../../reusable-components/Loader';
import apiCall from '../../../ApiCall';



 function NoOrder() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
     
      marginTop:'13%'

     
      

     }}>
<AiOutlineExclamationCircle size={'7%'} color="#C7C7CC" style={{
marginBottom:'1%'
}}/>
<h6 style={{
color:'#8E8E93',
fontWeight:'300',
fontSize:'20px',
marginBottom:'1%'

}}>No Orders are found</h6>



     </div>
  )
}


export default function OrderTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const OrderActionController = bindActionCreators(orderActionCreators, dispatch);
  const orderController = useSelector((state)=>state.order);
  const [isLoading, setLoading] = useState(false);
   const [pending , setPending] = useState(0);
   const [processing, setProcessing] = useState();
   const [canceled, setCanceled] = useState();
   const [completed, setCompleted] = useState();

useEffect(()=>{
  if(orderController.orders.length===0){
    OrderActionController.getAllOrdersAction();
    
    setDataSource(orderController.orders);
 
  }
  {
    setDataSource(orderController.orders);
    
  }
  
})



const [inputText, setInputText]=useState('');
const [dataSource, setDataSource]=useState([]);
const[tableFilter,setTableFilter]=useState([]);
const [currentPage,setCurrentPage]= useState(1);
 const [orderPerPage , setOrderPerPage]= useState(5);
 const indexOfLastOrder = currentPage * orderPerPage;
 const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
 const currentOrders = inputText.length > 0 ? tableFilter.slice(indexOfFirstOrder,indexOfLastOrder) : dataSource.slice(indexOfFirstOrder,indexOfLastOrder); 
   const filterData =(e)=>{
     if(e.target.value !== ''){
         setInputText(e.target.value);
         const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
         setTableFilter([...filterTable]);
     }else{
         setInputText(e.target.value);
         setDataSource([...dataSource]);
     }
   }

   const paginate =(pageNumber)=>{
     setCurrentPage(pageNumber);
   }
 

 
 


  return ( isLoading ? <Loader/>:
    <StyledOrder >

    <div
            className="col-lg-12 d-flex flex-lg-row flex-column align-items-lg-center justify-content-between align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">
          
            
                <div className="col-lg-4 px-0 ">
                <div className="customSearch " style={{
                  justifyContent:'start',
                  alignContent:'center',
                  alignItems:'center',
                  marginBottom:'30px'

                  
                }} >
  <BsSearch size={20} color='black'/>
  <input style={{
    border:'none',
    background:'transparent',
    padding:'0',
    margin:'0'
  }}  type="text" className="form-control" placeholder="Search"  aria-describedby="basic-addon1" alue={inputText} onChange={filterData} />

        </div>
                </div>

                <div className="col-lg-4 d-flex justify-content-lg-end">
            <div>
                 
                <button  onClick={()=>{
                  currentOrders.sort();
                  window.location.reload(false);
                }}
                    className="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        className="material-icons-outlined medium mr-2">
                      <TbAdjustmentsHorizontal size={25} style={{
                        padding:'2px'
                      }}/>  
                    </span> Filter Order</button>
            </div>

        </div>
           

        </div>


        <Table borderless responsive hover style={{
          marginBottom:'160px'
        }}  >
      <thead style={{
       
      }}>
      
      <tr   style={{
        color:'#8E8E93',
       

        borderBottom:'1px solid #8E8E93',
        
      
      }}>
                    <th scope="col" >#</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Menu</th>
                    <th scope="col">Total Payment($)</th>
                    <th scope="col">Order Type</th>
                    <th scope="col">Ordered Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions </th>
                </tr>
      </thead>
      <tbody > 

              
{ 
                  
                  currentOrders.length === 0 ?<tr></tr> :
                  currentOrders.map((order,index)=>{return(
                
                
                    <tr key={index} className='customShadow'  height="80px" >
                        <td scope="col" onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{index+1}</td>
                        <td scope="col" onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}> {order['id']}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}> {order['customer']['firstName']}  {order['customer']['lastName']} 
                             </td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}> {order['itemCount']} {order['itemCount'] ===1  ? "Item" :"Different Items" } </td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{parseFloat(order['totalPayment']).toFixed(2)}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{order['orderType']}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{order['orderTime']}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>
                
                         
                            <div 
                             style={{
                              color:parseInt(order['status']) === 0 ?"orange" :  parseInt(order['status']) === 1 ? "Green":parseInt(order['status']) === 2  ? "#7B3EFD":"Red",
                             }
                                
                            }>{ parseInt(order['status']) === 0 ?"Pending" :  parseInt(order['status']) === 1 ? "Active":parseInt(order['status']) === 2  ? "Completed ":"Rejected" }
                            </div>
                
                            {/* <div 
                            className="px-2 bg-lightSuccess small py-1 font-weight-bold text-success d-flex justify-content-center align-items-center rounded-pill">
                           {order.status}</div>
                
                           <div 
                            className="px-2 bg-lightDanger small py-1 font-weight-bold text-danger d-flex justify-content-center align-items-center rounded-pill">
                            {order.status}</div>
                        <div 
                            className="px-2 bg-light small py-1 font-weight-bold text-info  d-flex justify-content-center align-items-center rounded-pill">
                            {order.status}</div> */}
                
                        </td>
                        <td>
                        <DropdownButton title="" variant='white' >
                      
                <Dropdown.Item onClick={ async ()=>{
                   setLoading(true);
           await  OrderActionController.updateOrderStatusAction(order['id'], 1);
             window.location.reload(false);      
          setLoading(false)
                }} >Accept</Dropdown.Item>
                <Dropdown.Item onClick={async ()=>{
                     setLoading(true);
            await OrderActionController.updateOrderStatusAction(order['id'], 2);
             window.location.reload(false);
             setLoading(false);
           
                }}  >Complete</Dropdown.Item>
                  <Dropdown.Item onClick={async ()=>{
                    setLoading(true);
           await  OrderActionController.updateOrderStatusAction(order['id'], 5);
           window.location.reload(false);
           setLoading(false);
                       

       
          
                }}  >Reject</Dropdown.Item>
                <Dropdown.Item onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }}  >View</Dropdown.Item>
                
                </DropdownButton>
                        </td>
                       
                      
                        </tr>
                    );})
                }
            </tbody>
    </Table>

    {dataSource.length === 0 ? <NoOrder/> :<div></div>}

    <div className=' fixed-bottom  mb-5 mr-5  account btn'>

    <Pagination className="fixed-bottom" ordersPerPage={orderPerPage} totalOrders={dataSource.length} paginate ={paginate} currentPage={currentPage}/>
    </div>
       
     
       

    </StyledOrder>
  )
}



const StyledOrder = styled.section`

td {
  
  vertical-align: middle;
    display: table-cell;
}


`;



