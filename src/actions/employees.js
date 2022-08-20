import { getAllEmployees, editEmployee, deleteEmployee, addEmployee , blockEmployee, unBlockEmployee} from "../services/employees.service";
import Employee from "../models/Employee"
import { EMPLOYEES_FETCHED_SUCCESS, EMPLOYEE_DELETE_SUCCESS , EMPLOYEE_DELETE_FAILED, EMPLOYEE_ADD_SUCCESS, EMPLOYEE_ADD_FAILD } from "./types";




export const getAllEmployeesAction =()=>(dispatch)=>{
  
    return getAllEmployees().then(
        (data)=>{
         if(data.success){
          
            data.data.map((employee)=>{
               
                dispatch({
                    type:EMPLOYEES_FETCHED_SUCCESS,
                    payload: new Employee(employee.id, employee.firstName,employee.lastname,employee.phoneNumber,employee.email,employee.status)
                })
            })
         }
        }
    )
}

export const addEmployeeAction =(employee)=>(dispatch)=>{
     addEmployee(employee).then(
        (data)=>{
            if(data.success){
               
               dispatch({
                type:EMPLOYEE_ADD_SUCCESS,
                payload:data.message
               })
            }else{
             
                dispatch({
                    type:EMPLOYEE_ADD_FAILD,
                    payload:data.message
                })
            }
          
         },
         (error)=>{
           
         }
     );}

     
export const editEmployeeAction=(id,firstName, lastName, phoneNumber, email, password)=>(dispatch)=>{
    return editEmployee(id,firstName, lastName, phoneNumber, email, password).then(
         (data)=>{
       
         },
         (error)=>{

         }
    ) 
}
export const deleteEmployeeAction =(employeeId)=>(dispatch)=>{
    return deleteEmployee(employeeId).then(
     (data)=>{
         if(data.success){
            dispatch({
                type:EMPLOYEE_DELETE_SUCCESS,
                payload:data.message
            })
         }
         else{
            dispatch({
                type:EMPLOYEE_DELETE_FAILED,
                payload:data.message
            })
         }
     }
    ) 
}



export const blockEmployeeAction = (employeeId)=>(dispatch)=>{
    return blockEmployee(employeeId).then(
        (data)=>{
         
        },
        (error)=>{
    
        }
    )
}
export const unBlockEmployeeAction = (employeeId)=>(dispatch)=>{
    return unBlockEmployee(employeeId).then(
        (data)=>{
          
        },
        (error)=>{
       
        }
    )
}