import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router';
import { Dropdown } from 'react-bootstrap';

import { BsPerson } from "react-icons/bs";
import { BsArrowLeft } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import Pagination from '../TablePagination';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {orderActionCreators } from "../../../../actions/index"
import Loader from '../../../reusable-components/Loader';
import { API_BASE_URL } from '../../../../services/api-config';

export default function OrderDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const OrderActionController = bindActionCreators(orderActionCreators,dispatch); 
  const [orderDetail, setOrderDetail] = useState();
  const [isLoading, setLoading] = useState(false);
    const orderController = useSelector((state)=>state.order.orders)
    const [dataSource, setDataSource]=useState([]);
    let {orderId} = useParams();
   

   


     useEffect(()=>{
      OrderActionController.getAllOrdersAction();
      if(orderId){
       
     orderController.map((order)=>{
      
     
        if(order['id'] === orderId){
           console.log(order)
            setOrderDetail(order);
            setDataSource(order['menus'])
        }
     })
      }
     })
    
    
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
      }, []);


      const [inputText, setInputText]=useState('');
      
      const[tableFilter,setTableFilter]=useState([]);

    //   for pagination
  
    const [currentPage,setCurrentPage]= useState(1);
    const [orderPerPage , setOrderPerPage]= useState(3);


 

    // 

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



  return (

  orderDetail  ? isLoading ?<Loader/> : 

  <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">
<div class="alert-position">
<alert  type="getAlertMessage().type" dismissible="dismissible"
  dismissOnTimeout="3000">
   {/* message here */}
    </alert>

</div>

<div class="row flex justify-content-between">
<div class="col">

    <h3 class="font-weight-bolder"><span role="button" click="backClicked()"
            class="material-icons-outlined mr-2   medium p-0">
            <BsArrowLeft onClick={()=>{
              navigate(-1);
            }} style={{
              marginRight:'10px'
            }}/>
        </span>Order {orderId} </h3>
  
        <p style={{
      color:'gray'
    }}> {dateState.toLocaleDateString('en-US', {
         weekday:'long',
         day: 'numeric',
         month: 'short',
         year: 'numeric',
      })}</p>
</div>
<div class="col   ">
 
    <div class=" d-flex w-auto align-items-center px-4   justify-content-end">
        <div  >

          
          {   orderDetail ? 
            <><div
                    class="px-4  small py-2 font-weight-bold d-flex justify-content-center align-items-center rounded " style={(orderDetail.status === 0) ? {
                      backgroundColor: '#7B61FF2B',
                      color: ' #7B3EFD'
                    } : {
                      display: 'none'
                    }}>
                    Pending { orderDetail.status}</div><div
                      class="px-4 text-yellow-500   bg-warning bg-opacity-10 small py-2 font-weight-bold text-warning d-flex justify-content-center align-items-center rounded" style={(orderDetail.status === 1) ? {} : {
                        display: 'none'
                      }}>
                      Active</div><div
                        class="px-4   text-green-500 bg-success bg-opacity-10  small py-2 font-weight-bold text-success d-flex justify-content-center align-items-center rounded" style={(orderDetail.status === 2) ? {} : {
                          display: 'none'
                        }}>
                      Completed</div><div
                        class="px-4 bg-lightDanger small py-2 font-weight-bold text-danger d-flex justify-content-center align-items-center rounded" style={(orderDetail.status === 5) ? {
                          backgroundColor: '#ffdada',
                          color: '#7B3EFD'
                        } : {}}>
                      Rejected</div></>
          :<div></div>

          }
        </div>
    </div>
</div>



</div>

<div class="dropdown-divider"></div>



<div class="row h-100 pt-4">
<div class="col-lg-8  ">
<div  >

<Table  borderless  size="sm">
<thead>
<tr>
<th scope="col">Item</th>
                <th scope="col">Amount</th>
                <th scope="col">Cost</th>
                <th scope="col">Total</th>
</tr>
</thead>
<tbody>
{
currentOrders.map((order,index)=>{
    return (
        <tr>
<td class="d-flex flex-lg-row flex-column bg-white">
                 
                 <img class="rounded-lg mr-3 mb-2 mb-lg-0 " style={{
                  borderRadius:'10px'
                 }} src={`${API_BASE_URL}/Menu/Photos/`+order['foodImage1']} width="80px"
                     height="80px" alt=""/>

                 <div class="d-flex flex-column justify-content-center ">
                    
                     <h5 style={{
                       paddingLeft:'20px',
                       paddingTop:'10px'
                     }}>{order['name']}</h5>
                     
                   
                     <div class="d-flex ">
                     <div class="d-flex align-items-center 
         px-3  rounded mr-3" style={{
   border: "1px solid black",
  backgroundColor:'white' ,
  marginLeft:"10px"
}}>
{  order['categories'].length === 0 ? "SeaFood":order['categories'][0].categoryName}
        
    </div>
    <div class="d-flex align-items-center 
         px-3  rounded mr-3" style={{
   border: "1px solid gray",
  backgroundColor:'white' ,
  marginLeft:"10px"
}}>
{order['estPrepTime']}
        
    </div>      
                        
                         

                     </div>
                 </div>
             </td>
             <td class="bg-white center-vert">1x</td>
          
          <td class="bg-white center-vert">${order['price']}</td>

          <td class="bg-white center-vert">${order['price']}</td>
</tr>
    )
})
}


</tbody>
</Table>

<Pagination className=" " ordersPerPage={orderPerPage} totalOrders={dataSource.length} paginate ={paginate} currentPage={currentPage}/>
</div>




<div class=" row d-flex bg-black w-100 p-4 rounded-lg align-items-center m-0 mt-5" style={{
  borderRadius:'10px',
  

}}>
    <div class="col-lg-3 col-6 mb-lg-0 mb-4 d-flex flex-column">
        <p class="text-white">Total Orders</p>
    
        <h4  class="text-white">
       {orderDetail['itemCount']}
        </h4>
    </div>
    <div class="col-lg-3 col-6 mb-lg-0 mb-4 d-flex flex-column">
        <p class="text-white">Total Payment</p>
      
        <h4 class="text-white">Birr 
        { orderDetail.totalPayment.toFixed(2)}
        </h4>
    </div>
    <div class="col-lg-3 col-6 mb-lg-0 mb-4 d-flex flex-column">
    <Dropdown>
<Dropdown.Toggle style={{
border:'none',
height:'50px',
width:'80%',

}} variant="success" id="dropdown-basic">
    
</Dropdown.Toggle>
<Dropdown.Menu>
<Dropdown.Item   onClick={async ()=>{
             
        await OrderActionController.updateOrderStatusAction(orderId, 1);
             window.location.reload(false);

            }} >Accept</Dropdown.Item>
<Dropdown.Item onClick={ async ()=>{
          
        await OrderActionController.updateOrderStatusAction(orderId, 5);
            window.location.reload(false);

            }} >Reject</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
    </div>
    <div class="col-lg-3 col-6 mb-lg-0 mb-4 d-flex flex-column">
        <button className='finshButton'>Finish</button>
    </div>
    

   
  
  <div>
  
  </div>


   
    


    

</div>

    
    
</div>
<div class="col-lg-4 px-lg-5 px-3 mt-lg-0 mt-4">
   
    <div class="bg-white rounded-lg d-flex flex-column p-lg-5 p-4">
        <div class="d-flex mb-2">
           <div class="rounded-lg mr-2 " style={{
            backgroundColor:'#FECB16',
            color:'white',
            borderRadius:'15px',
            width:'75px',
            height:'80px',
            alignItems:'center',
            textAlign:'center',
            justifyContent:'center',
            display:'flex'
            
           }}>
           <BsPerson  size={'40px'} />
           </div>
           
         

            <div class="d-flex flex-column justify-content-center ml-3">
               
                <h4 class="font-weight-bold m-0 mb-1 ml-16" style={{
                  paddingLeft:'10px'
                }}>
                
                {orderDetail.customer.firstName}  {orderDetail.customer.lastname}
                
                 </h4>
              
                <h6 class="text-muted" style={{
                  paddingLeft:'10px'
                }}>Customer</h6>
            </div>

        </div>
        <h6 class="text-muted medium mt-2">Phone Number</h6>
        <div class="bg-inputBg d-flex  align-items-center rounded  pl-3 py-3 mt-2" style={{
          backgroundColor:'#f8f8f8'
        }}>
            <h4 class="font-weight-bold m-0" style={{
              paddingLeft:'10px'
            }}>
            {orderDetail.customer.phoneNumber}
            </h4>
        </div>
    </div>
    <div class="bg-white mt-3 d-flex flex-column p-5 rounded-lg mt-4">
        <h5 class="font-weight-bold">Customer Request</h5>
        <p class="text-muted medium text-justify" style={{
width:'30%'
        }}>
        {orderDetail.customerRequest}
        </p>
        <p  class="text-label medium text-justify"> <br></br></p>
        <form formGroup="statusFormGroup"> <textarea type="text" rows="6" class="form-control" 
                formControlName="statusFormControl" id="description" placeholder="Share a replay"></textarea>
        </form>
    </div>
</div>
</div>
</div> 
   :<Loader/>
 
  )
}


