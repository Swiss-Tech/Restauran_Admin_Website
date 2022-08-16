import { get_restaurant_information, restaurant_information_function, editAdmin, deleteCostSharing, addSharedCost } from "../services/account.service";
import { RESTAURANT_INFORMATION_FILLED_SUCCESS , RESTAURANT_INFORMATION_FILLED_FAILED, CLEAR_RESTAURANT_MESSAGE, RESTAURANT_INFO_FETCHED_SUCCESS, RESTAURANT_INFO_FETCHED_FAILED, RESTAURANT_INFORMATION_ADMIN_UPDATE_SUCCESS, RESTAURANT_INFORMATION_ADMIN_UPDATE_FAILED, RESTAURANT_INFORMATION_SHAREDCOST_ADD_SUCCESS, RESTAURANT_INFORMATION_SHAREDCOST_ADD_FAILED} from "./types";


export const getRestaurantInformationAction=()=>(dispatch)=>{
  return get_restaurant_information().then(
    (data)=>{
      if (data.success) {
        dispatch({
          type: RESTAURANT_INFO_FETCHED_SUCCESS,
          payload: data.data,
        });
      } else {
       
        dispatch({
          type: RESTAURANT_INFO_FETCHED_FAILED,
          payload: data.message,
        });
      }
    }
  )
}

export const addCostSharing =(sharedCost)=>(dispatch)=>{
  return addSharedCost(sharedCost).then(
    (data)=>{
      if(data.success){
        dispatch({
          type:RESTAURANT_INFORMATION_SHAREDCOST_ADD_SUCCESS,
          payload:data.message
        })
      }
      else{
        dispatch({
          type:RESTAURANT_INFORMATION_SHAREDCOST_ADD_FAILED,
          payload:data.message
        })
      }
      
    }
  )
}

export const restaurantInformation = (restaurantName, restaurantLocation, restaurantNumber, restaurantEmail, restaurantDescription, logoUrl, restaurantImage1, restaurantImage2, restaurantImage3, restaurantImage4, workingDays , sharedCosts)=>(dispatch)=>{
  
  return restaurant_information_function(restaurantName, restaurantLocation, restaurantNumber, restaurantEmail, restaurantDescription, logoUrl, restaurantImage1, restaurantImage2, restaurantImage3, restaurantImage4, workingDays , sharedCosts).then(
    (data)=>{
        if (data.success) {
            dispatch({
              type: RESTAURANT_INFORMATION_FILLED_SUCCESS,
              payload: data.message,
            });
          } else {
           
            dispatch({
              type: RESTAURANT_INFORMATION_FILLED_FAILED,
              payload: data.message,
            });
          }
    },
    (error)=>{
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        dispatch({
          type: RESTAURANT_INFORMATION_FILLED_FAILED,
          payload: message,
        });
    }
  )
}



export const deteleCostSharing=(id)=>(dispatch)=>{
  return deleteCostSharing(id).then(
    (data)=>{
      console.log(data);
    }
  )
}

export const updateAdminInfoAction =(admin)=>(dispatch)=>{
  
   return editAdmin(admin).then(
    (data)=>{
       if(data.success){
        dispatch({
         type:RESTAURANT_INFORMATION_ADMIN_UPDATE_SUCCESS,
         payload:data.message
        })
       }
       else{
        dispatch({
          type:RESTAURANT_INFORMATION_ADMIN_UPDATE_FAILED,
          payload:data.message
         })
       }
     
    },
    (error)=>{
        
    }
   )
}

export const clearRestaurantMessageAction = () => ({ type: CLEAR_RESTAURANT_MESSAGE });

