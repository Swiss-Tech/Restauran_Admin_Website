import React from 'react'
import Catagory , {AccordionExampleNested} from './catagory-template/Catagory'

export default function Catagories() {
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div class="row">
        <div class="col">
            
            <h3 class="font-weight-bolder">Catagories</h3>
            <p>12-12-2012</p>
        </div>

      </div>
    <div class="dropdown-divider"></div>
    <div class="row pt-3">
    <div class="col-lg-7 bg-white px-5 py-5 mx-lg-0 mx-3 rounded-lg">
         
      <Catagory/>


     </div>

     <div class="col-lg-5 ">
     <form class="needs-validation" novalidate >
     <div
                    class="d-flex flex-column bg-white px-5 py-5 mx-lg-0 mb-lg-0 mb-5  rounded-lg ml-lg-5 mt-lg-0 mt-3">
                                        <h5 class="font-weight-bold mb-4">add categories</h5>
                                        <div class="dropdown-divider mb-3"></div>
                        <div class="form-group">
                            <label class="font-weight-normal h6 " for="category-name">Category Came 
                           </label>
                           <input  type="text" class="form-control" formControlName="categoryName"
                            name="" id="category-name" placeholder="" />
                     
                          <div class="form-control-feedback text-danger"
                            >
                            Please Add category name
                          </div>
                       
                           <div class="form-control-feedback text-success" >
                              Looks Good
                        </div>
                    </div>
                    <div class="form-group">
                            <label class="font-weight-normal h6 " for="category-name">Category Came 
                           </label>
                           <input  type="text" class="form-control" formControlName="categoryName"
                            name="" id="category-name" placeholder="" />
                     
                          <div class="form-control-feedback text-danger"
                            >
                            Please Add category name
                          </div>
                       
                           <div class="form-control-feedback text-success" >
                              Looks Good
                        </div>
                    </div>

                    <div style={{
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <div>In parent Category</div> <button>i</button>
                    </div>
                    <button>Add Category</button>

                    
                    </div>
     </form>
     </div>
    </div>
    </div>
  )
}
