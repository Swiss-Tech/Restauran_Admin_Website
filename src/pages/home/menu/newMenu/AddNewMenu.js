import React , {useState} from 'react'
import CatagoryImagePicker from './CatagoryImagePicker'
export default function AddNewMenu() {
    const [image1, setImage1]=useState()
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div class="row">
        <div class="col-lg-8">
          
            <h3 class="font-weight-bolder">Add Menu</h3>
            <p>12-12-2112</p>
        </div>
        <div class="col-lg-4 d-flex justify-content-lg-end">
            <div> <button 
                    class="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        class="material-icons-outlined medium mr-2">
                        
                    </span>Manage Catagory</button></div>

        </div>
    </div>
    <div class="dropdown-divider"></div>

    <div class="row pt-3">

        <div class="col-lg-7 bg-white px-lg-5 px-4 py-5 mx-lg-0 mx-2 rounded">
            <form class="needs-validation" novalidate>
                <div className='row'>
                <div class="col-lg-6">
                      
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="item-name">itemName</label>
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
                            <label class="font-weight-normal h6 " for="calories">calories</label>
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
                            <label class="font-weight-normal h6 " for="description">descrition</label>
                            <textarea type="text" rows="3" class="form-control" name="" formControlName="description"
                                id="description" placeholder="description"></textarea>
                         
                            <div class="form-control-feedback text-danger"
                               >
                                description is required
                            </div>
                         
                            <div class="form-control-feedback text-success">
                                Looks Good
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-6">
                       
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="enough_for">Eenough for'</label>
                            <input min="1" formControlName="enoughFor" type="number" class="form-control" name=""
                                id="enough_for" placeholder=""/>
                        </div>
                      
                        
                       
                       
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="removable_ingredients">'removable ingredients'
                                 </label>
                            <div class="d-flex">
                        
                                <input formControlName="removableIngredient" type="text" class="form-control" name=""
                                    id="removable_ingredients" placeholder=""/>
                       
                                <button class="btn  btn-outline-dark  ml-2 px-4 d-flex align-items-center"
                                    ><span class="material-icons-outlined medium m-0 p-0">
                                        icon
                                    </span></button>
                            </div>
                        </div>
                  
                        <div class="dropdown-divider mt-2 mb-3"></div>
                     
                        <div class="d-flex flex-wrap">
                            <div 
                                class="rounded-pill bg-placeholder text-black font-weight-normal d-inline-flex justify-content-center align-items-center pl-3 pr-2 py-1 mr-2 mb-2">
                                tomato<span 
                                    class="material-icons medium ml-2 btn p-0 m-0">
                                    x
                                </span></div>

                        </div>
                    </div>

                    <div class="col-lg-6 mt-lg-0 mt-5">
                    
                        <div class="form-group">
                            <label class="font-weight-normal h6 "
                                for="estimated_preparation_time">Estmated Pereparation </label>
                            <input min="0" formControlName="estimatedTime" type="number" class="form-control" name=""
                                id="estimated_preparation_time" placeholder=""/>
                        </div>

  

                       
                        
                         <div class="form-group">
                            <label class="font-weight-normal h6 " for="categories">categories</label>
                            <input formControlName="categories" type="text" class="form-control" name="" id="categories"
                                placeholder=""/> 
                        
                         

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
             
            <div class="row">

                
                <CatagoryImagePicker   handleClick={setImage1}
              imageUrl={image1}
              id={"restaurantImage1"} />
              <CatagoryImagePicker   handleClick={setImage1}
              imageUrl={image1}
              id={"restaurantImage1"} />
              <CatagoryImagePicker   handleClick={setImage1}
              imageUrl={image1}
              id={"restaurantImage1"} />
                
                
                </div>


                <div class="row px-5 py-3  justify-content-center align-items-center">
                <div class="col-10 dropdown-divider  "></div>
                <div class="col-12 d-flex justify-content-between align-items-center px-4">
                 
                    <h6 class="pt-2 mt-1 mr-2">Status Avialable</h6>
                   
                    <ui-switch size="small" color="#fecb16">
             icon
                    </ui-switch>

                </div>
                <div class="col-10 dropdown-divider"></div>
            </div>

            <div class="row px-lg-4 py-3 justify-content-center align-items-center mb-lg-0 mb-5">
                <button  type="button" class="btn btn-black col-lg-4 col-5 py-2  mr-2 d-inline">
                    <span >save and add</span>
                    <ng-template >
                        <div class="spinner-border text-white" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </ng-template>

                </button>

                <button  type="button" 
                    class="btn btn-primary col-lg-4 col-5 py-2 font-weight-bold ml-2 d-inline">
                    <span >save</span>
                    <ng-template >
                        <div class="spinner-border text-white" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </ng-template>

                </button>
            </div>

   
   
   
   
                
            </div>
        </div>
    </div>
    </div>
  )
}
