import Category from "../models/Category";
import { getAllCategory } from "../services/category.services";
import { CATEGORYS_FETCHED_FAILED, CATEGORYS_FETCHED_SUCCESS } from "./types";
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