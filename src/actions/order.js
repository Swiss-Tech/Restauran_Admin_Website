import { getAllOrders ,  updateStatus } from "../services/order.service";
import {  ORDER_FETCHED_SUCCESS, ORDER_FETCHED_FAILED, ORDER_CHANGE_STATUS_FAILED, ORDER_CHANGE_STATUS_SUCCESS, CLEAR_ORDER_MESSAGE, Or } from "./types";

import OrderModel from "../models/Order";
export const getAllOrdersAction =()=>(dispatch)=>{
     return getAllOrders().then(
        (data)=>{
           if(data.success){
            data.data.map((item)=>{
                dispatch(
                    {
                        type:ORDER_FETCHED_SUCCESS,
                        payload: new OrderModel(
                           
                               item.id,
                               item.customer,
                               item.customerID,
                               item.menus,
                               item.itemCount,
                               item.totalPayment,
                               item.orderType,
                               item.orderTime,
                               item.orderedOn,
                               item.status,
                               item.customerRequest


                            )
                    }
                )
               })
           
           }
           else{
            dispatch({
                type:ORDER_FETCHED_FAILED,
                payload:data.message
              })
           }
        },
        (error)=>{
            const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        console.log(error);
        }
     );
}

export const updateOrderStatusAction =(orderId , status)=>(dispatch)=>{
    console.log(orderId)
    console.log(status)
    return updateStatus(orderId, status).then(
        
        (data)=>{
            if(data.success){
              dispatch({
                type:ORDER_CHANGE_STATUS_SUCCESS,
                payload:data.message
              })
            }
            else{
                dispatch({
                    type:ORDER_CHANGE_STATUS_FAILED,
                    payload:data.message
                  })
            }

        }
    );
}


export const clearOrderMessageAction = () => ({
   
  });
  