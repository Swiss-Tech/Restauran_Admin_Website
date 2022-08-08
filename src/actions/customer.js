
import { getAllCustomers , blockCustomer , unBlockCustomer } from "../services/customer.service";

import { CUSTOMER_FETCHED_SUCCESS , CUSTOMER_FETCHED_FAILED, CUSTOMER_BLOCK_SUCCESS, CUSTOMER_BLOCK_FAILED, CLEAR_CUSTOMER_MESSAGE } from "./types";
import Customer from "../models/Customer"
export const getAllCustomersAction =()=>(dispatch)=>{
    return getAllCustomers().then(
        (data)=>{
          
        if(data.success){
            data.data.map((customer)=>{
                dispatch({
                    type:CUSTOMER_FETCHED_SUCCESS,
                    payload: new Customer(customer.id,customer.customer, customer.customerId, customer.activeOrders,customer.totalPayment,customer.status)
                })
              })
        }
        else{
            dispatch({
                type:CUSTOMER_FETCHED_FAILED,
                payload: data.message
            })
        }
        }
    )
}



export const blockCustomerAction =(customerId)=>(dispatch)=>{
    return blockCustomer(customerId).then(
      (data)=>{
        console.log(data.message)
      }
    )

}
export const unBlockCustomerAction =(customerId)=>(dispatch)=>{
    return unBlockCustomer(customerId).then(
        (data)=>{
            console.log(data.message)
          }
    )

}

export const clearCustomerMessageAction = ()=>({
    
});