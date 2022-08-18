import React , { useState, useEffect} from 'react'
import Pagination from '../TablePagination';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BsSearch } from 'react-icons/bs';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import { Table } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { messageActionCreators } from '../../../../actions';
import { orderActionCreators } from '../../../../actions';
import { useSelector } from 'react-redux';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import apiCall from '../../../../ApiCall';


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

export default function NewOrder() {
 const dispatch = useDispatch();
 const OrderActionController = bindActionCreators(orderActionCreators, dispatch);
  const ActionController = bindActionCreators(messageActionCreators, dispatch);
  const orderController = useSelector((state)=>state.order);
  const navigate = useNavigate();

 

  useEffect(()=>{
    apiCall(dispatch);
    if(orderController.orders.length === 0){

      OrderActionController.getAllOrdersAction();
      setDataSource(orderController.orders);
    }
    else{
      setDataSource(orderController.orders);
    }
  },[])
  const goToDetail =(order)=>{
    //
    navigate('/orderdetail',{state:{order}});
  }
   
      
     


      const [inputText, setInputText]=useState('');
      const [dataSource, setDataSource]=useState([]);
      const[tableFilter,setTableFilter]=useState([]);

    //   for pagination
  
    const [currentPage,setCurrentPage]= useState(1);
    const [orderPerPage , setOrderPerPage]= useState(5);


 

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
      const [dateState, setDateState] = useState(new Date());
      useEffect(() => {
          setInterval(() => setDateState(new Date()), 30000);
        }, []);
  return (
   
      <div className="container-fluid px-lg-5 px-2 pt-5 position-relative">
<div className="col">
            <h3 className="font-weight-bolder">New Orders</h3>
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
    <div
            className="col-lg-12 d-flex flex-lg-row flex-column align-items-lg-center justify-content-end align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">
          
            
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
  }}  type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" value={inputText} onChange={filterData} />

        </div>
                </div>

                <div className="col-lg-4 d-flex justify-content-lg-end">
            <div>
                 
                <button 
                    className="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        className="material-icons-outlined medium mr-2">
                      <TbAdjustmentsHorizontal size={25} style={{
                        padding:'2px'
                      }}/>  
                    </span> Filter Order</button>
            </div>

        </div>
           

        </div>

        <StyledOrder>
        <Table borderless responsive  >
      <thead style={{
       
      }}>
      <tr   style={{
        color:'#8E8E93',
        borderBottom:'1px solid #8E8E93',
        
      
      }}>
                    
                    <th scope="col">Customer</th>
                    <th scope="col">Menu</th>
                    <th scope="col">Total Payment</th>
                    <th scope="col">Order Type</th>
                    <th scope="col">Ordered Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
      </thead>
      <tbody >
                { currentOrders.map((order,index)=>{return(

    
                        <tr className='customShadow'  height="80px" >
                       
                      
                        <td>
                             {order['customer']['firstName']} {order['customer']['lastname']}
                              </td>
                        <td >
                          {order['itemCount']}
                        </td>
                        <td>  {order['totalPayment'].toFixed(2)}</td>
                        <td >{order['orderType']}</td>
                        <td >{order.orderTime}</td>
                        <td >

                         
                            <div 
                            >
                           {order['status']}</div>

                          

                        </td>
                        <td  onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>
                        <div
            className=" btn d-flex justify-content-center align-items-center border  py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 shadow-sm">
   
            View
        </div>
                        </td>
                       
                      
                        </tr>
                    );})
                }
            </tbody>
    </Table></StyledOrder>
    {dataSource.length === 0 ? <NoOrder/> :<div></div>}
    <div className=' fixed-bottom  mb-5 mr-5  account btn'>

    <Pagination  ordersPerPage={orderPerPage} totalOrders={dataSource.length} paginate ={paginate} currentPage={currentPage}/>
</div>
   
 

        </div>
    
  )
}



const StyledOrder = styled.section`
td {
  
  vertical-align: middle;
    display: table-cell;
}


`;