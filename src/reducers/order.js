import { ORDER_FETCHED_SUCCESS ,
    ORDER_FETCHED_FAILED,
      CLEAR_ORDER_MESSAGE,
      ORDER_CHANGE_STATUS_SUCCESS,
      ORDER_CHANGE_STATUS_FAILED
      } from "../actions/types";

var initalState ={
    orders:[],
    responseMessage:null,
    sucess : null
}


export default function reducer (state=initalState,action){

    const {type, payload} = action;
    switch(type){
        case ORDER_FETCHED_SUCCESS:
            return {
                ...state ,
                orders:state.orders.some(item =>item.id===payload.id) ?[...state.orders] :[...state.orders, payload],
                responseMessage:null,
                sucess:true
            }
        case ORDER_FETCHED_FAILED:
            return {
                ...state,
                orders:[...state.orders],
                responseMessage:payload,
                sucess:false
                
            }
        case ORDER_CHANGE_STATUS_SUCCESS :
            return {
                ...state,
                responseMessage:payload,
                sucess:true
            }
        case ORDER_CHANGE_STATUS_FAILED:
            return {
                ...state,
                responseMessage:payload,
                sucess:false
            }
         
            case CLEAR_ORDER_MESSAGE :
                 return {
                ...state,
                responseMessage:null,
                sucess:null
                
            }
        
        default :
        return state;
    }
}