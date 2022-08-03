import { StaticDatePicker } from "@mui/x-date-pickers";
import { MENUITEMS_FETCHED_SUCCESS,  MENUITEMS_FETCHED_FAILED,
    MENUITEM_CREATE_SUCCESS,
    MENUITEM_CREATE_FAILED,
    MENUITEM_UPDATE_SUCCESS,
    MENUITEM_UPDATE_FAILED,
    MENUITEM_DELETE_SUCCESS,
    MENUITEM_DELETE_FAILED,
    CLEAR_MENU_MESSAGE

} from "../actions/types";

var initalState =  {
    menus:[],
    responseMessage:null,
    sucess : null
};

export default function reducer( state = initalState, action){
    const { type , payload} = action;
   
   

    switch(type){
        case MENUITEMS_FETCHED_SUCCESS :
            
            return {
            
                ...state,
                menus : state.menus.some(item =>item.id === payload.id) ? [...state.menus ] : [...state.menus,payload ] ,
                responseMessage:null, 
                sucess:true
            }
        case MENUITEM_CREATE_SUCCESS :
            return {
                ...state,
                responseMessage:payload,
                responseMessage:null,
                sucess:true
            }
        case MENUITEM_UPDATE_FAILED :{
            return {
                ...state,
                responseMessage :payload,
                sucess:false
            }
        }
         case CLEAR_MENU_MESSAGE :
            return {
                ...state,
                responseMessage:null,
                sucess:null
                
            }
        
        default:
        return state;
    }
}
