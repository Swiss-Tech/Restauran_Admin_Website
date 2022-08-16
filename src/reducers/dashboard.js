import { DASHBOARD_DATA_FETCHED_SUCCESS, DASHBOARD_DATA_FETCHED_FAILED } from "../actions/types";
var initalState ={
    dashboardData:[],
    responseMessage:null,
    sucess : null
}


export default function reducer (state=initalState, action){
    const {type , payload} = action;
    switch(type){
        case DASHBOARD_DATA_FETCHED_SUCCESS :
            return {
                ...state,
                dashboardData:payload,
                sucess:true
            }
        case DASHBOARD_DATA_FETCHED_FAILED:
            return {
                ...state,
                responseMessage:payload,
                sucess:false
            }
        default :
            return state;
    }
}
