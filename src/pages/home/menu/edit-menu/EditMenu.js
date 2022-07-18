import React from 'react'
import CatagoryImagePicker from '../newMenu/CatagoryImagePicker'
export default function EditMenu() {
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div class="row">
        <div class="col-lg-8">
           
            <h3 class="font-weight-bolder">Edit Menu</h3>
            <p>12-12-12</p>
        </div>
        <div class="col-lg-4 d-flex justify-content-lg-end">
            <div> <button 
                    class="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        class="material-icons-outlined medium mr-2">
                        tune
                    </span>Manage Catagories</button></div>

        </div>
    </div>
     <div class="dropdown-divider"></div>
     <div class="row pt-3">

     <div class="col-lg-7 bg-white px-lg-5 px-4 py-5 mx-lg-0 mx-2 rounded">
      <form class="needs-validation" novalidate>
      <div class="row">
      <div class="col-lg-6">
                    
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="item-name">item name</label>
                            <input formControlName="itemName" type="text" class="form-control" name="" id="item-name"
                                placeholder=""/>
             
                            <div class="form-control-feedback text-danger"
                                >
                                Item name is required
                            </div>
                          
                            <div class="form-control-feedback text-success" >
                                Looks Good
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="calories">Calories</label>
                            <input formControlName="calories" type="number" class="form-control" name="" id="calories"
                                placeholder=""/>
                        </div>

                    </div>

                    <div class="col-lg-6">
                      
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="price">price</label>
                            <input min="0" formControlName="price" type="number" class="form-control" name="" id="price"
                                placeholder=""/>
                        
                            <div class="form-control-feedback text-danger"
                                >
                                Item price is required
                            </div>
                           
                            <div class="form-control-feedback text-success" >
                                Looks Good
                            </div>
                        </div>

                      
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="weight">weight <span
                                    class="text-muted small">(gram)</span> </label>
                            <input min="1" formControlName="weight" type="number" class="form-control" name=""
                                id="weight" placeholder=""/>
                        </div>

                    </div>

                    <div class="col-12">
                
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="description">description
                                </label>
                            <textarea type="text" rows="3" class="form-control" name="" formControlName="description"
                                id="description" placeholder="description"></textarea>
                          
                            <div class="form-control-feedback text-danger"
                              >
                                description is required
                            </div>
                            
                            <div class="form-control-feedback text-success" >
                                Looks Good
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-6">
                      
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="enough_for">'enough_for'</label>
                            <input min="1" formControlName="enoughFor" type="number" class="form-control" name=""
                                id="enough_for" placeholder=""/>
                        </div>
                       
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="discount">'discount'(%)</label>
                            <input min="0" max="100" formControlName="discount" type="number" class="form-control"
                                name="" id="discount" placeholder=""/>
                        </div>
                       
                        <div class="form-control-feedback text-danger"
                          >
                            Allowed values are between 0 and 100
                        </div>
                      
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="removable_ingredients">'removable_ingredients'
                                </label>
                            <div class="d-flex">
                         
                                <input formControlName="removableIngredient" type="text" class="form-control" name=""
                                    id="removable_ingredients" placeholder=""/>
                            
                                <button class="btn  btn-outline-dark  ml-2 px-4 d-flex align-items-center"
                                    click="addIngerdient()"><span class="material-icons-outlined medium m-0 p-0">
                                        add_circle
                                    </span></button>
                            </div>
                        </div>
               
                        <div class="dropdown-divider mt-2 mb-3"></div>
                  
                        <div class="d-flex flex-wrap">
                            <div 
                                class="rounded-pill bg-placeholder text-black font-weight-normal d-inline-flex justify-content-center align-items-center pl-3 pr-2 py-1 mr-2 mb-2">
                                ingredient<span click="removeIngredient(ingredient)"
                                    class="material-icons medium ml-2 btn p-0 m-0">
                                    cancel
                                </span></div>

                        </div>
                    </div>

                    <div class="col-lg-6 mt-lg-0 mt-5">
                       
                        <div class="form-group">
                            <label class="font-weight-normal h6 "
                                for="estimated_preparation_time">'estimated_preparation_time' </label>
                            <input min="0" formControlName="estimatedTime" type="number" class="form-control" name=""
                                id="estimated_preparation_time" placeholder=""/>
                        </div>
                       

                        <div class="form-group d-flex flex-column">
                            <label class="font-weight-normal h6   " for="categories">'categories'
                               </label>
                            <div class="btn-group" dropdown id="categories">
                                <button id="button-animated" dropdownToggle type="button"
                                    class="btn btn-primary dropdown-toggle py-2 d-flex justify-content-between align-items-center px-4 bg-inputBg border-inputBg mybtn"
                                    aria-controls="dropdown-animated">
                                    <span>
                                        Uncategorized
                                    </span>
                                    <ng-template >
catagory name

                                    </ng-template>


                                    <span class="caret"></span>
                                </button>
                                <ul id="dropdown-animated" role="menu"
                                    aria-labelledby="button-animated">
                                    <li  role="menuitem"><a
                                            click="setSelectedCategory(item.id , item.name)"
                                            class="dropdown-item">piza</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="form-group form-check mt-3 ml-2">
                            <input type="checkbox" formControlName="featured" class="form-check-input" id="featured"/>
                            <label class="form-check-label" for="featured">Set as featured item</label>
                        </div>
                      <div class="form-group">
                            <label class="font-weight-normal h6 " for="categories">'categories'</label>
                            <input formControlName="categories" type="text" class="form-control" name="" id="categories"
                                placeholder=""/> 
                     
                       <div class="form-control-feedback text-danger">
                                Item category is required
                            </div>

                        </div> 

                    </div>
      </div>

      </form>
     </div>

     <div class="col-lg-5 px-lg-5 px-3 mt-lg-0 mt-2">
     <div class="dropdown-divider d-lg-none d-block mb-3"></div>
     <div class="row px-lg-5 px-3 mb-3">
            
                <div class="col-6 d-flex flex-column  justify-content-center ">
                    <h6 class="font-weight-bold">Add images</h6>
                </div>

                <div class="col-12">
                   
                    <div class="form-control-feedback text-danger" >
                        Please provide atleast one image
                    </div>
                
                    <div class="form-control-feedback text-success" >
                        Looks Good
                    </div>
                </div>
            </div>
            <div class="row px-lg-5 px-2 mt-lg-0 mt-5">
            <div class="row">            
<CatagoryImagePicker  />
<CatagoryImagePicker  />
<CatagoryImagePicker  />
</div>
            </div>
            <div class="row px-5 py-3  justify-content-center align-items-center">
                <div class="col-10 dropdown-divider  "></div>
                <div class="col-12 d-flex justify-content-between align-items-center px-4">
                  
                    <h6 class="pt-2 mt-1 mr-2">'status_available' </h6>
                    
                    <ui-switch  size="small" color="#fecb16"></ui-switch>

                </div>
                <div class="col-10 dropdown-divider"></div>
            </div>

            <div class="row px-lg-4 py-3 justify-content-center align-items-center mb-lg-0 mb-5">


                <button  type="button" 
                    class="btn btn-primary col-lg-4 col-5 py-2 font-weight-bold ml-2 d-inline">
                    <span >'save'|
                       </span>
                   

                </button>
            </div>
     </div>
     </div>
    </div>
  )
}
