import React , {  useState}from 'react'
import { Dropdown } from 'react-bootstrap';

import Pagination from './TablePagination';
import OrderDetail from './orderDetail/OrderDetail';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { messageActionCreators } from '../../../actions';


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
    <div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" value={inputText} onChange={filterData} />
</div>
<table class="table  table-borderless  table-hover mt-lg-4">
          
            <thead>
                <tr class="border-top-0 text-muted text-center ">
                    <th scope="col">#</th>
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
            <tbody>
                { currentOrders.map((order,index)=>{return(

    
                        <tr onClick={()=>{
                          // to={`orderDetail/${order.id}`}
                         ActionController.setMessage(order);
                        }}>
                        <td scope="col">{index+1}</td>
                        <td > {order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.menu}</td>
                        <td>{order.total}</td>
                        <td>{order.orderType}</td>
                        <td>{order.orderTime}</td>
                        <td>

                         
                            <div 
                            class="px-2 bg-lightPrimary small py-1 font-weight-bold text-warning d-flex justify-content-center align-items-center rounded-pill" style={(order.status==='pending')?{}:{
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
                        <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic">
         Dropdown Button
       </Dropdown.Toggle>

       <Dropdown.Menu>
        <Dropdown.Item href="">Action</Dropdown.Item>         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="">Something else</Dropdown.Item>
    </Dropdown.Menu>
   </Dropdown>
                        </tr>
                    );})
                }
            </tbody>
           
        </table>
        <Pagination ordersPerPage={orderPerPage} totalOrders={rows.length} paginate ={paginate} currentPage={currentPage}/>
    </div>
  )
}
