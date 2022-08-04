import {
     CATEGORYS_FETCHED_SUCCESS ,
      CATEGORYS_FETCHED_FAILED ,
       CATEGORY_ADD_SUCCESS,
       CATEGORY_ADD_FAILD,
       CATEGORY_UPDATE_SUCCESS,
       CATEGORY_UPDATE_FAILED,
       CATEGORY_DELETE_SUCCESS,
       CATEGORY_DELETE_FAILED,
       CLEAR_CATEGORY_MESSAGE


} from "../actions/types";
import Category from "../models/Category";
var initalState =  {
    categories:[new Category('1',"All",false,"")],
    responseMessage :null,
    sucess : null
};

export default function reducer( state = initalState, action){
    const { type , payload} = action;
   
   

    switch(type){
        case CATEGORYS_FETCHED_SUCCESS :
            
            return {
            
                ...state,
                
                categories : state.categories.some(item =>item.id === payload.id) ?[...state.categories] : [...state.categories,payload ] ,
                sucess : null
            }
         case CATEGORYS_FETCHED_FAILED:
            return {
                ...state,
                responseMessage :payload,
                sucess : false
            }
            case CATEGORY_ADD_SUCCESS:
                return {
                    ...state,
                    responseMessage :payload,
                    sucess : true
                }
            case CATEGORY_ADD_FAILD:
                    return {
                        ...state,
                        responseMessage :payload,
                        sucess : false
                    }
           case CATEGORY_UPDATE_SUCCESS:
                        return {
                            ...state,
                            responseMessage :payload,
                            sucess : true
                        }
            case CATEGORY_UPDATE_FAILED:
                            return {
                                ...state,
                                responseMessage :payload,
                                sucess : false
                            }
            case CATEGORY_DELETE_SUCCESS:
                                return {
                                    ...state,
                                    responseMessage :payload,
                                    sucess : true
                                }
             case CATEGORY_DELETE_FAILED:
                                    return {
                                        ...state,
                                        responseMessage :payload,
                                        sucess : false
                                    }

          case CLEAR_CATEGORY_MESSAGE :
            return {
                ...state,
                responseMessage :null,
                sucess : null
            }


        default:
        return state;
    }
}