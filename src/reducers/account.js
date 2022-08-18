import { RESTAURANT_INFORMATION_FILLED_FAILED , RESTAURANT_INFORMATION_FILLED_SUCCESS , CLEAR_RESTAURANT_MESSAGE, RESTAURANT_INFORMATION_FETCHED_SUCCESS, RESTAURANT_INFO_FETCHED_FAILED, RESTAURANT_INFO_FETCHED_SUCCESS, RESTAURANT_INFORMATION_ADMIN_UPDATE_SUCCESS, RESTAURANT_INFORMATION_ADMIN_UPDATE_FAILED, ADMIN_INFO_FETCHED_FAILED, ADMIN_INFO_FETCHED_SUCCESS } from "../actions/types"
var  initalState = {
    restaurantInformation :[],
    adminInformation:[],
    responseMessage:null,
    sucess : null
}


export default function reducer(state= initalState, action){
    const {type , payload} = action;
    switch(type){
         
        case ADMIN_INFO_FETCHED_SUCCESS :
            return {
                ...state,
                adminInformation:payload,
                sucess:true,

            }

            case ADMIN_INFO_FETCHED_FAILED :
            return {
                ...state,
                responseMessage:payload,
                sucess:false,

            }

        case RESTAURANT_INFO_FETCHED_SUCCESS :
            return {
                ...state,
                restaurantInformation :payload,
                sucess:true
            }
        case RESTAURANT_INFO_FETCHED_FAILED :
            return {
                ...state,
                responseMessage:payload,
                sucess:false
            }
        case RESTAURANT_INFORMATION_FILLED_SUCCESS :
            return {
                ...state,
                responseMessage:payload,
                sucess:true
                
            }
         case RESTAURANT_INFORMATION_FILLED_FAILED:
            return {
                ...state,
                responseMessage:payload,
                sucess:false
            }

            case RESTAURANT_INFORMATION_ADMIN_UPDATE_SUCCESS :
                return {
                    ...state,
                    responseMessage:payload,
                    sucess:true
                    
                }
             case RESTAURANT_INFORMATION_ADMIN_UPDATE_FAILED:
                return {
                    ...state,
                    responseMessage:payload,
                    sucess:false
                }
         case CLEAR_RESTAURANT_MESSAGE:
            return {
                ...state,
                responseMessage:null,
                sucess:null
                
            }

     default :
     return state;
    }
}