import { RESTAURANT_INFORMATION_FILLED_FAILED , RESTAURANT_INFORMATION_FILLED_SUCCESS , CLEAR_RESTAURANT_MESSAGE } from "../actions/types"
var  initalState = {
    restaurantInformation :[],
    responseMessage:null,
    sucess : null
}


export default function reducer(state= initalState, action){
    const {type , payload} = action;
    switch(type){
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