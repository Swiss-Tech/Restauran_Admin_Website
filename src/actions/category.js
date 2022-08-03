import Category from "../models/Category";
import { getAllCategory , addCategory,updateCategory ,deleteCategory} from "../services/category.services";
import { addMenuItem } from "../services/menu.services";
import { CATEGORYS_FETCHED_FAILED, CATEGORYS_FETCHED_SUCCESS , CATEGORY_ADD_FAILD, CATEGORY_ADD_SUCCESS } from "./types";
export const getAllCatagoryAction =()=> (dispatch)=>{
    return getAllCategory().then(
        (data)=>{
            if (data.success) {

                data.data.map((category) => {
                    dispatch({
                        type: CATEGORYS_FETCHED_SUCCESS,
                        payload: new Category(category.id, category.categoryName, category.isParentCategory, category.parentCategory)
                    });
                });
            }
            else {
            }
        },
        (error)=>{
           
        }

    );
   
}

export const addCategoryAction=(category)=>(dispatch)=>{

    return addCategory(category).then(
        (data)=>{
             if (data.success) {
                dispatch({
                    type:CATEGORY_ADD_SUCCESS,
                    payload:data.message
                })
             }
             else{
                dispatch({
                    type:CATEGORY_ADD_FAILD,
                    payload:data.message
                })
             }
        },
        (error)=>{

    dispatch({
    type:CATEGORY_ADD_FAILD,
    payload:error
})
        }
    )
}

export const updateCategoryAction=(category)=>(dispatch)=>{
      
    return updateCategory(category).then(
        (data)=>{
             if (data.success) {
                dispatch({
                    type:CATEGORY_ADD_SUCCESS,
                    payload:data.message
                })
             }
             else{
                dispatch({
                    type:CATEGORY_ADD_FAILD,
                    payload:data.message
                })
             }
        },
        (error)=>{

    dispatch({
    type:CATEGORY_ADD_FAILD,
    payload:error
})
        }
    )
}

export const deleteCategoryAction =(id)=>(dispatch)=>{
    return deleteCategory(id).then(
        (data)=>{
            console.log(data);
        }
    )
}