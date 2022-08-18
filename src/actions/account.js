import { getAdminInfo,get_restaurant_information, restaurant_information_function, editAdmin, deleteCostSharing, addSharedCost, deleteDays } from "../services/account.service";
import { RESTAURANT_INFORMATION_FILLED_SUCCESS , RESTAURANT_INFORMATION_FILLED_FAILED, CLEAR_RESTAURANT_MESSAGE, RESTAURANT_INFO_FETCHED_SUCCESS, RESTAURANT_INFO_FETCHED_FAILED, RESTAURANT_INFORMATION_ADMIN_UPDATE_SUCCESS, RESTAURANT_INFORMATION_ADMIN_UPDATE_FAILED, RESTAURANT_INFORMATION_SHAREDCOST_ADD_SUCCESS, RESTAURANT_INFORMATION_SHAREDCOST_ADD_FAILED, ADMIN_INFO_FETCHED_SUCCESS, ADMIN_INFO_FETCHED_FAILED} from "./types";


export const deleteDaysAction =(id)=>(dispatch)=>{
  return deleteDays(id).then((data)=>{
    if(data.success){

    console.log(data.message)
         
    }
    else{
      

    }
  }).catch((e)=>{

  })
}

export const getAdminInformationAction = ()=>(dispatch)=>{
      return getAdminInfo().then(
        (data)=>{
          if(data.success){
            dispatch({
              type:ADMIN_INFO_FETCHED_SUCCESS,
              payload:data.data
            })

          }
          else{
            dispatch({
              type:ADMIN_INFO_FETCHED_FAILED,
              payload:data.message
            })
          }
        }
      ).catch((e)=>{
        console.log(e)
      })
}


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

export const addCostSharing =(sharedCost)=>async (dispatch)=>{
  const data = await addSharedCost(sharedCost);
  if (data.success) {
    dispatch({
      type: RESTAURANT_INFORMATION_SHAREDCOST_ADD_SUCCESS,
      payload: data.message
    });
  }
  else {
    dispatch({
      type: RESTAURANT_INFORMATION_SHAREDCOST_ADD_FAILED,
      payload: data.message
    });
  }
}

export const restaurantInformation = (restaurantName, restaurantLocation, restaurantNumber, restaurantEmail, restaurantDescription, logoUrl, restaurantImage1, restaurantImage2, restaurantImage3, restaurantImage4, workingDays , sharedCosts, openAt, closeAt)=>(dispatch)=>{
  
  return restaurant_information_function(restaurantName, restaurantLocation, restaurantNumber, restaurantEmail, restaurantDescription, logoUrl, restaurantImage1, restaurantImage2, restaurantImage3, restaurantImage4, workingDays , sharedCosts, openAt, closeAt).then(
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

