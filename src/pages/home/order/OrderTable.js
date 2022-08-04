import React , {  useState}from 'react'
//import { Dropdown } from 'react-bootstrap';

import Pagination from './TablePagination';
import OrderDetail from './orderDetail/OrderDetail';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { messageActionCreators } from '../../../actions';
import { BsSearch } from 'react-icons/bs';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styled from 'styled-components';
var Link = require("react-router-dom").Link;

export default function OrderTable() {
  const dispatch = useDispatch();
  const ActionController = bindActionCreators(messageActionCreators, dispatch);
  const navigate = useNavigate();


  const goToDetail =(order)=>{
    //
    navigate('/orderdetail',{state:{order}});
  }
    function createData(id, customer, menu, total, orderType,orderTime,status) {
        return {
          id,
          customer,
          menu,
          total,
          orderTime,
          orderType,
          status
        };
      }
      
      const rows = [
        createData(12,'woynshet',['Cupcake'], 305, '12:00', 'null', 'pending'),
        createData(13,'abebe',['pixa'], 305, '12:00', 'null', 'preparing'),
        createData(13,'yonatan',['pixa'], 305, '12:00', 'null', 'preparing'),
        createData(14,'bilihatu',['pixa'], 305, '12:00', 'null', 'preparing'),
        createData(12,'zenebech',['Cupcake'], 305, '12:00', 'null', 'pending'),
        createData(13,'tirore',['pixa'], 305, '12:00', 'null', 'preparing'),
        createData(13,'mimi',['pixa'], 305, '12:00', 'null', 'preparing'),
        createData(14,'eyu',['pixa'], 305, '12:00', 'null', 'preparing'),
        
      ];


      const [inputText, setInputText]=useState('');
      const [dataSource, setDataSource]=useState(rows);
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
  return (
    <StyledOrder>
    <div
            class="col-lg-12 d-flex flex-lg-row flex-column align-items-lg-center justify-content-between align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">
          
            
                <div class="col-lg-4 px-0 ">
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
  }}  type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" value={inputText} onChange={filterData} />

        </div>
                </div>

                <div class="col-lg-4 d-flex justify-content-lg-end">
            <div>
                 
                <button 
                    class="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        class="material-icons-outlined medium mr-2">
                      <TbAdjustmentsHorizontal size={25} style={{
                        padding:'2px'
                      }}/>  
                    </span> Filter Order</button>
            </div>

        </div>
           

        </div>


        <Table borderless responsive hover >
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
                    <th scope="col">Actions</th>
                </tr>
      </thead>
      <tbody >
                { currentOrders.map((order,index)=>{return(

    
                        <tr className='customShadow'  height="80px" >
                        <td scope="col" onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{index+1}</td>
                        <td scope="col" onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}> {order.id}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>
                              {order.customer}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{order.menu}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{order.total}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{order.orderType}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>{order.orderTime}</td>
                        <td onClick={()=>{
                          navigate(`/order/orderDetail/${order.id}`)
                        }} style={{
                          
                        }}>

                         
                            <div 
                             style={(order.status==='pending')?{
                              color:'orange'
                             }:{
                                display:'none'
                            }}>
                            {order.status}</div>

                            {/* <div 
                            class="px-2 bg-lightSuccess small py-1 font-weight-bold text-success d-flex justify-content-center align-items-center rounded-pill">
                           {order.status}</div>

                           <div 
                            class="px-2 bg-lightDanger small py-1 font-weight-bold text-danger d-flex justify-content-center align-items-center rounded-pill">
                            {order.status}</div>
                        <div 
                            class="px-2 bg-light small py-1 font-weight-bold text-info  d-flex justify-content-center align-items-center rounded-pill">
                            {order.status}</div> */}

                        </td>
                        <td>
                        <DropdownButton variant='white' >
                      
      <Dropdown.Item >Action</Dropdown.Item>
      <Dropdown.Item >Another action</Dropdown.Item>
      <Dropdown.Item >Another action</Dropdown.Item>
 
    </DropdownButton>
                        </td>
                       
                      
                        </tr>
                    );})
                }
            </tbody>
    </Table>

 
        <Pagination ordersPerPage={orderPerPage} totalOrders={rows.length} paginate ={paginate} currentPage={currentPage}/>
    </StyledOrder>
  )
}



const StyledOrder = styled.section`
td {
  
  vertical-align: middle;
    display: table-cell;
}


`;