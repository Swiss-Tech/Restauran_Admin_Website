import { getAllEmployees, editEmployee, editEmployee, deleteEmployee, addEmployee  } from "../services/employees.service";


export const getAllEmployeesAction =()=>(dispatch)=>{
    return getAllEmployees().then(
        console.log(" in employee")
    )
}

export const addEmployeeAction =(employee)=>(dispatch)=>{
    return addEmployee(employee).then(
        console.log("in add employee")
    ) 
}
export const editEmployeeAction =(employee)=>(dispatch)=>{
    return editEmployee(employee).then(
        console.log("in edit employee")
    ) 
}
export const deleteEmployeeAction =(employee)=>(dispatch)=>{
    return deleteEmployee(employee).then(
        console.log("in delete employee")
    ) 
}