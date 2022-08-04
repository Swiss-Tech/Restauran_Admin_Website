import { 
       EMPLOYEES_FETCHED_SUCCESS ,
       EMPLOYEES_FETCHED_FAILED, 
       EMPLOYEE_ADD_FAILD,
       EMPLOYEE_ADD_SUCCESS,
       EMPLOYEE_DELETE_SUCCESS,
       EMPLOYEE_DELETE_FAILED,
       EMPLOYEE_EDIT_SUCCESS,
       EMPLOYEE_EDIT_FAILED, 
       CLEAR_EMPLOYEE_MESSAGE
     } from "../actions/types";

     var initalState ={
        employees:[],
        responseMessage:null,
        sucess : null
    }
    


export default function reducer(state = initalState , action){
    const [type, payload] = action;
    switch(type){
        case EMPLOYEES_FETCHED_SUCCESS:
            return {
                ...state ,
                employees:state.employees.some(item =>item.id===payload.id) ?[...state.employees] :[...state.employees, payload],
                responseMessage:null,
                sucess:true

            }
        case EMPLOYEES_FETCHED_FAILED:
                return {
                    ...state ,
                    employees:[...state.employees] ,
                    responseMessage:payload,
                    sucess:false
    
                }
        case EMPLOYEE_ADD_SUCCESS:
                    return {
                        ...state ,
                        responseMessage:payload,
                        sucess:true
        
                    }
        case EMPLOYEE_ADD_FAILD:
                        return {
                            ...state ,
                            responseMessage:payload,
                            sucess:false
            
                        }
        case EMPLOYEE_EDIT_SUCCESS:
                            return {
                                ...state ,
                                responseMessage:payload,
                                sucess:true
                
                            }
        case EMPLOYEE_DELETE_SUCCESS:
             return {
                       ...state ,                
                   responseMessage:payload,
                    sucess:false
                    
                                }
        case EMPLOYEE_EDIT_SUCCESS:
                     return {
                            ...state ,
                            responseMessage:payload,
                            sucess:true
                        
                                    }
        case EMPLOYEE_EDIT_FAILED:
                          return {
                                    ...state ,
                                    responseMessage:payload,
                                 sucess:false
                            
                                        }
            

        
        default :
        return state
        
    }
}