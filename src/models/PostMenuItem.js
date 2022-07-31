export default class PostMenuItem {
  
    constructor ( 
      
      itemName,
      price,
      calories,  
      weight,   
      description,  
      enoughFor,  
      estimatedTime,  
      removableIngredient,
      category,      
      foodImage1,
      foodImage2,
      foodImage3,
      foodImage4,
      status  ) {
       
      this.itemName = itemName;
      this.price = price;
      this.calories = calories;
      this.weight = weight;
      this.description = description;
      this.enoughFor = enoughFor;
      this.estimatedTime = estimatedTime;
      this.removableIngredient = removableIngredient;
      this.category = category;
      this.foodImage1 = foodImage1;
      this.foodImage2 = foodImage2;
      this.foodImage3 = foodImage3;
      this.foodImage4 = foodImage4;
      this.status = status;
    }
  }
  