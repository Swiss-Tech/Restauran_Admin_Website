
export default class Category {
    constructor(id, categoryName, isParentCategory,parentCategory){
        this.id =id ;
        this.categoryName= categoryName;
        this.isParentCategory = isParentCategory;
        this.parentCategory = parentCategory;

    }
}