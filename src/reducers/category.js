import { CATEGORYS_FETCHED_SUCCESS } from "../actions/types";
import Category from "../models/Category";
var initalState =  {
    categories:[new Category('1',"All",false,"")],
    errorMessage :null
};

export default function reducer( state = initalState, action){
    const { type , payload} = action;
   
   

    switch(type){
        case CATEGORYS_FETCHED_SUCCESS :
            
            return {
            
                ...state,
                
                categories : state.categories.some(item =>item.id === payload.id) ?[...state.categories] : [...state.categories,payload ]  
            }
        default:
        return state;
    }
}