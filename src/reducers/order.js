import { ORDER_FETCHED_SUCCESS ,
    ORDER_FETCHED_FAILED,
    ORDER_ACCEPT_SUCCESS,
     ORDER_ACCEPT_FAILED,
    ORDER_REJECT_SUCCESS,
      ORDER_REJECT_FAILED ,
      CLEAR_ORDER_MESSAGE
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
        case ORDER_ACCEPT_SUCCESS :
            return {
                ...state,
                responseMessage:payload,
                sucess:true
            }
        case ORDER_ACCEPT_FAILED:
            return {
                ...state,
                responseMessage:payload,
                sucess:false
            }
            case ORDER_REJECT_SUCCESS :
                return {
                    ...state,
                    responseMessage:payload,
                    sucess:true
                }
            case ORDER_REJECT_FAILED:
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