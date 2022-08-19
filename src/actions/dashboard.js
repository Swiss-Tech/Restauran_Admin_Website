import { DASHBOARD_DATA_FETCHED_SUCCESS, DASHBOARD_DATA_FETCHED_FAILED} from "./types";
import { dashboardData } from "../services/account.service";


  export const getDashboardData =()=>(dispatch)=>{
    return dashboardData().then(
      (data)=>{
       
        if (data.success) {
          dispatch({
            type: DASHBOARD_DATA_FETCHED_SUCCESS,
            payload: data.data,
          });
        } else {
         
          dispatch({
            type: DASHBOARD_DATA_FETCHED_FAILED,
            payload: data.message,
          });
        }
      }
    )
  }


  