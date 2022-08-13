import React , {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { bindActionCreators } from 'redux';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BsSearch } from 'react-icons/bs';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Pagination from '../order/TablePagination';
import { employeeActionCreators } from '../../../actions';



export default function EmployeeTable(props) {
    const dispatch = useDispatch();
    const EmployeeActionController = bindActionCreators(employeeActionCreators,dispatch)
     const employeeController = useSelector((state)=>state.employee.employees);
   
  
  
  useEffect(()=>{
    if(employeeController.length===0){
        EmployeeActionController.getAllEmployeesAction();
      
      setDataSource(employeeController);
   
    }
    {
      setDataSource(employeeController);
      
    }
    
  })
  
  
  
  
  const [inputText, setInputText]=useState('');
  const [dataSource, setDataSource]=useState([]);
  const[tableFilter,setTableFilter]=useState([]);
  const [currentPage,setCurrentPage]= useState(1);
   const [orderPerPage , setOrderPerPage]= useState(5);
   const indexOfLastOrder = currentPage * orderPerPage;
   const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
   const currentEmployees = inputText.length > 0 ? tableFilter.slice(indexOfFirstOrder,indexOfLastOrder) : dataSource.slice(indexOfFirstOrder,indexOfLastOrder); 
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
      <StyledOrder >
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
    }}  type="text" class="form-control" placeholder="Search"  aria-describedby="basic-addon1" alue={inputText} onChange={filterData} />
  
          </div>
                  </div>
  
  
          </div>
  
  
          
          <Table borderless responsive hover style={{
            marginBottom:"120px"
          }} >
        <thead style={{
         
        }}>
        <tr   style={{
          color:'#8E8E93',
         
  
          borderBottom:'1px solid #8E8E93',
          
        
        }}>
                      <th scope="col" >#</th>
                      <th scope="col">Employee ID</th>
                      <th scope="col">Employee</th>
                    
                      <th scope="col">Status</th>
                      <th scope="col">Actions </th>
                  </tr>
        </thead>
        <tbody > 
  
                
   {   currentEmployees.map((employee,index)=>{return(
                  
                  
                      <tr className='customShadow'  height="80px" >
                          <td scope="col">{index+1}</td>
                          <td scope="col">{employee['id']}</td>
                          <td> {employee['firstName']} {employee['lastName']} 
                               </td>
                         
                       
                          
                          <td>
                  
                           
                          {employee['status']}
                  
                             
                  
                          </td>
                          <td>
                          <DropdownButton variant='white' >
                        
                  <Dropdown.Item onClick={ async ()=>{
                      
                    await EmployeeActionController.unBlockEmployeeAction(employee['id'])
                          window.location.reload(false)
                  }} >Unblock</Dropdown.Item>
                  <Dropdown.Item onClick={async ()=>{
                    
                     await EmployeeActionController.blockEmployeeAction(employee['id'])
                     window.location.reload(false)
                  }}  >Block</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{
                             props.setIsEdit(true);
                             props.setEditable(employee)
      
                  }}  >Edit</Dropdown.Item>
                  <Dropdown.Item onClick={ async ()=>{
                      
                      await EmployeeActionController.deleteEmployeeAction(employee['id']);
                      window.location.reload(false)
                          }}  >Delete</Dropdown.Item>
                          
                  
                  </DropdownButton>
                          </td>
                         
                        
                          </tr>
                      );})
                  }
              </tbody>
      </Table>
   
     
          <Pagination ordersPerPage={orderPerPage} totalOrders={dataSource.length} paginate ={paginate} currentPage={currentPage}/>
     
  
      </StyledOrder>
    )
  }
  
  
  
  const StyledOrder = styled.section`
  td {
    
    vertical-align: middle;
      display: table-cell;
  }
  
  
  `;
  
  
  
  