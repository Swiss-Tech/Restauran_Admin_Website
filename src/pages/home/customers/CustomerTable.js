import React, {useState ,useEffect} from 'react'
import { useNavigate } from 'react-router';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { orderActionCreators } from '../../../actions';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import Pagination from '../order/TablePagination';
import { customerActionCreators } from '../../../actions';
import Loader from '../../reusable-components/Loader';
export default function CustomerTable() {
  const customerController = useSelector((state)=>state.customer);
    const dispatch = useDispatch();
    
  
    const CustomerActionController = bindActionCreators(customerActionCreators, dispatch);
   
   
  
  useEffect(()=>{
    if(customerController.customers.length===0){

    
      CustomerActionController.getAllCustomersAction();
      setDataSource(customerController.customers);
   
    }
    {
      setDataSource(customerController.customers);
      
    }
    
  })
  
  
  
  const [inputText, setInputText]=useState('');
  const [dataSource, setDataSource]=useState([]);
  const[tableFilter,setTableFilter]=useState([]);
  const [currentPage,setCurrentPage]= useState(1);
   const [orderPerPage , setOrderPerPage]= useState(5);
   const indexOfLastOrder = currentPage * orderPerPage;
   const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
   const currentCustomer = inputText.length > 0 ? tableFilter.slice(indexOfFirstOrder,indexOfLastOrder) : dataSource.slice(indexOfFirstOrder,indexOfLastOrder); 
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
    dataSource.length !==0 ?   <StyledCustomer>
    <div
            class="col-lg-12 d-flex flex-lg-row flex-column align-items-lg-center justify-content-between align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">
                  <div
          class="d-flex justify-content-center align-items-center border bg-white px-4 py-2 rounded mr-lg-3 mr-2 mb-lg-0 mb-3 ">
          <span class="h3 mr-3 mb-0 " style={{
            marginRight:"10px"
          }}>{customerController.customers.length}</span>
        Customers
          </div>

          
            
                <div class="col-lg-4  " style={{
                  marginTop:'20px'
                }}>
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
  }}  type="text" class="form-control" placeholder="Search"  aria-describedby="basic-addon1" alue={inputText} onChange={filterData} />

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


        <Table borderless responsive hover style={{
          marginBottom:'80px'
        }} >
      <thead style={{
       
      }}>
      <tr   style={{
        color:'#8E8E93',
       

        borderBottom:'1px solid #8E8E93',
        
      
      }}>
                    <th scope="col" >#</th>
                    
                    <th scope="col">Customer ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Active Order(#id)</th>
                    <th scope="col">Total Payment (Br.)</th>
                    <th scope="col">LifeTime Orders</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions </th>
                </tr>
      </thead>
      <tbody > 

              
{ 
                  
                  
                  currentCustomer.map((customer,index)=>{return(
                
                
                    <tr className='customShadow'  height="80px" >
                        <td scope="col" >{index+1}</td>
                        <td scope="col" > {customer['customer']['id']}</td>
                        <td> {customer['customer']['firstName']} {customer['customer']['lastname']}</td>
                        <td >{ customer['activeOrders'].length === 0 ? customer['activeOrders'].length :<div>
                          {customer['activeOrders'].map((order)=>{<p>{order.id}</p>})}
                        </div> }</td>
                        <td >{customer['totalPayment']}</td>
                        <td >24</td>
                      
                        <td>
                
                         
                            <div 
                             style={(customer['status']==='pending')?{
                              color:'orange'
                             }:{
                                
                            }}>{customer['status']}
                            </div>
                
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
                      
                <Dropdown.Item  onClick={()=>{
                     CustomerActionController.blockCustomerAction(customer['customer']['id'])
                }}>Block</Dropdown.Item>
                <Dropdown.Item onClick={()=>{
                   CustomerActionController.unBlockCustomerAction(customer['customer']['id'])
                }} >Unblock</Dropdown.Item>
             
                
                </DropdownButton>
                        </td>
                      
                       
                      
                        </tr>
                    );})
                }
            </tbody>
    </Table>

 
   
        <Pagination ordersPerPage={orderPerPage} totalOrders={dataSource.length} paginate ={paginate} currentPage={currentPage}/>
   

    </StyledCustomer> : <Loader/>
    )
  }
  
  
  
  const StyledCustomer = styled.section`
  td {
    
    vertical-align: middle;
      display: table-cell;
  }
  
  
  `;
  
  
  
  