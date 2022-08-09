import { restaurant_information_function } from "../services/account.service";
import { RESTAURANT_INFORMATION_FILLED_SUCCESS , RESTAURANT_INFORMATION_FILLED_FAILED, CLEAR_RESTAURANT_MESSAGE} from "./types";


export const restaurantInformation =(restaurantName, restaurantLocation, restaurantNumber, restaurantEmail, restaurantDescription, logoUrl, restaurantImage1, restaurantImage2, restaurantImage3, restaurantImage4, workingDays , sharedCosts)=>(dispatch)=>{

   
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
export const clearRestaurantMessageAction = () => ({ type: CLEAR_RESTAURANT_MESSAGE });

