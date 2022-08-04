import { CUSTOMER_FETCHED_SUCCESS ,CUSTOMER_FETCHED_FAILED, CUSTOMER_BLOCK_SUCCESS, CUSTOMER_BLOCK_FAILED, CLEAR_CUSTOMER_MESSAGE  } from "../actions/types";
var initalState ={
    customers:[],
    responseMessage:null,
    sucess : null
}


export default function reducer (state = initalState, action){
    const {type , payload} = action;
    switch(type){
        case CUSTOMER_FETCHED_SUCCESS:
            return {
                ...state ,
                customers:state.customers.some(item =>item.id===payload.id) ?[...state.customers] :[...state.customers, payload],
                responseMessage:null,
                sucess:true
            }
        case CUSTOMER_FETCHED_FAILED:
            return {
                ...state,
                customers:[...state.customers],
                responseMessage:payload,
                sucess:false
                
            }
            case CUSTOMER_BLOCK_SUCCESS :
                return {
                    ...state,
                    responseMessage:payload,
                    sucess:true
                }
            case CUSTOMER_BLOCK_FAILED:
                return {
                    ...state,
                    responseMessage:payload,
                    sucess:false
                } 
            case CLEAR_CUSTOMER_MESSAGE :
                return {
                    ...state,
                    responseMessage:null,
                    sucess:null
                    
                }
            default :
            return state;
    }
}