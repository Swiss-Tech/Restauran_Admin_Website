import React, {useState , useEffect} from 'react'
import OrderTable from '../order/OrderTable'
import EmployeeTable from "./EmployeeTable"
import EmployeePost from '../../../models/EmployeePost';
import { bindActionCreators } from 'redux';
import { employeeActionCreators } from '../../../actions';
import { useDispatch } from 'react-redux';
import { logDOM } from '@testing-library/react';
export default function Employees() {
    const dispatch = useDispatch()
    const EmployeeActionController = bindActionCreators(employeeActionCreators, dispatch);
    const [employeeFristName , setEmployeeFirstName] = useState();
    const [employeeLastName , setEmployeeLastName] = useState();
    const [employeeEmail , setEmployeeEmail] = useState();
    const [employeePassword, setEmployeePassword] = useState();
    const [phoneNumber , setPhoneNumber] = useState();
    const [isEdit , setEdit ] = useState(false);
    const [id , setId]= useState()
    const [editableEmployee , setEditable] = useState();
    const [isLoading , setLoading] = useState(false);
    
    useEffect(()=>{
        if(isEdit){
            setId(editableEmployee.id);
            setEmployeeFirstName(editableEmployee.firstName)
            setEmployeeLastName(editableEmployee.lastName);
            setPhoneNumber(editableEmployee.phoneNumber)
            setEmployeeEmail(editableEmployee.email)
            
        }
    }, [isEdit])
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
      }, []);

  
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div class="row">
        <div class="col">
           
            <h3 class="font-weight-bolder">Employees</h3>
          
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
    <div class="row w-100 pt-3  ml-0  ">
    <div class="col-lg-7 px-0">
    <div
                class="col-lg-6 d-flex flex-lg-row flex-column  align-items-lg-center align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">

            </div>



            <EmployeeTable setEditable ={setEditable} setIsEdit={setEdit} handleLoading ={ setLoading } />


    </div>
    <div class="col-lg-5 ">
    <form class="needs-validation" novalidate >
    <div
                    class="d-flex flex-column bg-white px-5 py-5 mx-lg-0 mb-lg-0 mb-5  rounded-lg ml-lg-5 mt-lg-0 mt-3">
                        <h5 class="font-weight-bold mb-4">Add employee</h5>
                   
                        <div class="form-group">
                        <label class="font-weight-normal h6 " for="employee-first-name"> First Name
                            </label>
                        <input type="text" class="form-control" defaultValue={employeeFristName} onChange={(e)=> setEmployeeFirstName(e.target.value)}/>
                 
                        <div class="form-control-feedback text-danger" style={(employeeFristName ) ?{
                            display:'none'
                        }:{}}
                            >
                            Please Add employee First name
                        </div>
  
                        <div class="form-control-feedback text-success"  style={(employeeFristName ) ?{
                           
                        }:{ display:'none'}} > 
                            Looks Good
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="font-weight-normal h6 " for="employee-name"> Last Name
                            </label>
                        <input type="text" class="form-control" defaultValue={employeeLastName} onChange={(e)=> setEmployeeLastName(e.target.value)}/>
                 
                        <div class="form-control-feedback text-danger" style={(employeeLastName ) ?{
                            display:'none'
                        }:{}}
                            >
                            Please Add employee last name
                        </div>
  
                        <div class="form-control-feedback text-success"  style={(employeeLastName ) ?{
                           
                        }:{ display:'none'}} > 
                            Looks Good
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="font-weight-normal h6 " for="employee-name">Phone Number
                            </label>
                        <input type="number" class="form-control" defaultValue={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
                 
                        <div class="form-control-feedback text-danger" style={(phoneNumber ) ?{
                            display:'none'
                        }:{}}
                            >
                            Please Add Phone Number
                        </div>
  
                        <div class="form-control-feedback text-success"  style={(phoneNumber ) ?{
                           
                        }:{ display:'none'}} > 
                            Looks Good
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="font-weight-normal h6 " >Email
                            </label>
                        <input type="email" class="form-control" defaultValue={employeeEmail} onChange={(e)=>setEmployeeEmail(e.target.value)}/>
                 
                        <div class="form-control-feedback text-danger"   style={(employeeEmail ) ?{
                          display:'none' 
                        }:{ }}
                            >
                            Please enter password again
                        </div>
                   
                        <div class="form-control-feedback text-success" style={(employeeEmail ) ?{
                     
                        }:{      display:'none' }} >
                            Looks Good
                        </div>
                    </div>
                   
                    <div class="form-group">
                        <label class="font-weight-normal h6 " for="password" >Password
                            </label>
                        <input type="text" class="form-control" onChange={(e)=>setEmployeePassword(e.target.value)} />
                       
                        <div class="form-control-feedback text-danger"  style={(employeePassword ) ?{
                     display:'none' 
                    }:{      }} 
                            >
                            Please enter password 
                        </div>
                   
                        <div class="form-control-feedback text-success"   style={(employeePassword ) ?{
                    
                    }:{      display:'none'  }} >
                            Looks Good
                        </div>

                    </div>
                   
                    
               
                        <div class=" d-flex justify-content-center align-items-center "><button onClick={()=>{
                            if(isEdit){
                                EmployeeActionController.editEmployeeAction(id,employeeFristName, employeeLastName, phoneNumber, employeeEmail, employeePassword);
                            }
                           else{
                            EmployeeActionController.addEmployeeAction(new EmployeePost(employeeFristName,employeeLastName,employeeEmail, phoneNumber, employeePassword))
                           }
                        }}
                                type="button" 
                                class="btn customButton px-5  font-weight-bold ml-2 d-inline mt-3"> { isEdit ? "Update Employee":"Add Employee"}
                                </button></div>
                    
                    </div>
    </form>
    </div>
    </div>
    </div>
  )
}


