import { getAllMenuItem,addMenuItem, updateMenu , deleteMenu } from "../services/menu.services";
import { MENUITEMS_FETCHED_SUCCESS,
     MENUITEMS_FETCHED_FAILED,
     MENUITEM_CREATE_SUCCESS,
     MENUITEM_CREATE_FAILED,
     MENUITEM_UPDATE_SUCCESS,
     MENUITEM_UPDATE_FAILED,
     MENUITEM_DELETE_SUCCESS,
     SET_MESSAGE,
     MENUITEM_DELETE_FAILED} from "./types";
import MenuItem from "../models/MenuItem";
import { type } from "@testing-library/user-event/dist/type";



export const getallmenues = ()=> (dispatch)=> {
   return getAllMenuItem().then(
        (data)=>{
            
            if (data.success){
                
               data.data.map((item)=>{
                console.log(item)
                dispatch(
                    {
                        type:MENUITEMS_FETCHED_SUCCESS,
                        payload: new MenuItem(
                            item.id,
                            item.name,
                            item.price,
                            item.calories,
                            item.weight,
                            item.description,
                            item.enoughFor,
                            item.estPrepTime,
                            item.removableIngredientsList,
                            item.categories,
                            item.foodImage1,
                            item.foodImage2,
                            item.foodImage3,
                            item.foodImage4,
                            item.status


                            )
                    }
                )
               })
            }
            else{
             dispatch(
                {
                    type:SET_MESSAGE,
                    payload:data.message
                }
             )
            }
            
            
        },(error) => {
            const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        }
       )   
 
  };
  



