import { getAllOrders , acceptOrder , rejectOrder } from "../services/order.service";
import {  ORDER_FETCHED_SUCCESS, ORDER_FETCHED_FAILED,  ORDER_ACCEPT_SUCCESS , ORDER_ACCEPT_FAILED, ORDER_REJECT_SUCCESS, ORDER_REJECT_FAILED, CLEAR_ORDER_MESSAGE, Or } from "./types";


export const getAllOrdersAction =()=>(dispatch)=>{
    return getAllOrders().then(
console.log("yo")
    );
}

export const acceptOrderAction =()=>(dispatch)=>{
    return acceptOrder().then(
        console.log("accept")
    );
}

export const rejectOrderAction =()=>(dispatch)=>{
    return rejectOrder().then(
        console.log("reject")
    );
}

export const clearOrderMessageAction = () => ({
   
  });
  