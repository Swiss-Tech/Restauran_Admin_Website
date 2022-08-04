
import { getAllCustomers , blockCustomer } from "../services/customer.service";

import { CUSTOMER_FETCHED_SUCCESS , CUSTOMER_FETCHED_FAILED, CUSTOMER_BLOCK_SUCCESS, CUSTOMER_BLOCK_FAILED, CLEAR_CUSTOMER_MESSAGE } from "./types";

export const getAllCustomersAction =()=>(dispatch)=>{
    return getAllCustomers().then(
        console.log("in get customer")
    )
}

export const blockCustomerAction =(customerId , blockValue)=>(dispatch)=>{
    return blockCustomer(customerId, blockValue).then(
        console.log("in blocßk")
    )

}

export const clearCustomerMessageAction = ()=>({
    
});