import { StaticDatePicker } from "@mui/x-date-pickers";
import { MENUITEMS_FETCHED_SUCCESS,  MENUITEMS_FETCHED_FAILED,
    MENUITEM_CREATE_SUCCESS,
    MENUITEM_CREATE_FAILED,
    MENUITEM_UPDATE_SUCCESS,
    MENUITEM_UPDATE_FAILED,
    MENUITEM_DELETE_SUCCESS,
    MENUITEM_DELETE_FAILED

} from "../actions/types";

var initalState =  {
    menus:[],
    errorMessage :""
};

export default function reducer( state = initalState, action){
    const { type , payload} = action;
   
   

    switch(type){
        case MENUITEMS_FETCHED_SUCCESS :
            
            return {
            
                ...state,
                menus : state.menus.some(item =>item.id === payload.id) ? [...state.menus ] : [...state.menus,payload ]  
            }
        default:
        return state;
    }
}
