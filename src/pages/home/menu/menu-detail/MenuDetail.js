import React from 'react'

import { AiOutlineArrowLeft } from "react-icons/ai";
import CatagoryImagePicker from '../newMenu/CatagoryImagePicker';

import { GrEdit } from "react-icons/gr";
export default function MenuDetail() {
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div class="row flex justify-content-between">
        <div class="col">
        
            <h3 class="font-weight-bolder"><span role="button" class="material-icons-outlined mr-2   medium p-0"
                    click="goTolist()">
                    <AiOutlineArrowLeft/>
                </span>Item - 1221</h3>
           
            <p>12/12/2012</p>
        </div>
        <div class="col   ">
          
            <div class=" d-flex w-auto align-items-center px-4   justify-content-end">

              
                <div class="d-inline"> <button click="goToEditPage(data.id)" class="btn btn-black px-4 ml-5"> <span
                            class="material-icons-outlined small mr-2">
                            <GrEdit/>
                        </span>Edit </button></div>
            
            </div>
        </div>
    </div>
    <div class="dropdown-divider"></div>
    <div class="row py-4 ">
    <div class="col-lg-5 mb-lg-0 mb-4">
            <CatagoryImagePicker/>
        </div>
        <div class="col-lg-7 py-3 px-3 ">
        <div class="d-flex  align-items-center">
               
                <h3 class="font-weight-bold">Pizza</h3>
             
                <div
                    class="px-4 py-1 ml-4 border bg-primary text-black rounded font-weight-bold d-flex justify-content-center align-items-center">
                1500
                </div>
            </div>
            <p class="py-3 pr-5">lorems my name is woynshet bilihatu abeze </p>
            <div class="dropdown-divider py-2"></div>
            <div class="d-flex flex-row align-items-center  flex-wrap">
              
                <div class=" d-flex flex-row justify-content-center align-items-center mr-4 mb-lg-0 mb-3 md-4">
                    <h6 class="mr-2 text-muted">Discount -</h6>
                    <h6 class="font-weight-bold">12 %</h6>
                </div>
               
                <div class=" d-flex flex-row justify-content-center align-items-center mr-4 mb-lg-0 mb-3">
                    <h6 class="mr-2 text-muted">Time -</h6>
                    <h6 class="font-weight-bold">2000</h6>
                </div>
             
                <div class=" d-flex flex-row justify-content-center align-items-center mr-4 mb-lg-0 mb-3">
                    <h6 class="mr-2 text-muted">Enough For -</h6>
                    <h6 class="font-weight-bold">12</h6>
                </div>
               
                <div class=" d-flex flex-row justify-content-center align-items-center mr-4 mb-lg-0 mb-3">
                    <h6 class="mr-2 text-muted">Weight -</h6>

                    <h6 class="font-weight-bold">2000</h6>
      
                <div 
                    class=" d-flex flex-row justify-content-center align-items-center mr-3 mb-lg-0 mb-3 ">
                    <h6 class="mr-2 text-muted">Calories -</h6>
          
                    <h6 class="font-weight-bold">200</h6>
                </div>
            </div>

           </div>
           <div class="dropdown-divider mt-4 pb-2"></div>
           <div class="d-flex flex-row justify-content-between col-12 flex-wrap px-0">
               
                <div 
                    class="col-md-6 col-12 flex-column mb-lg-0 mb-4 px-0">
                   
                    <h6 class=" text-muted mb-3">Removable Ingredients</h6>
                 
                    <div class="d-flex flex-wrap">
                    
                        <div 
                            class="rounded-pill d-inline bg-line text-black font-weight-normal d-flex justify-content-center align-items-center px-3  py-1 mr-2">
                           Item
                        </div>
                    </div>

                </div>
               
                <div class="d-flex col-md-6 col-12 flex-column px-0">
                  
                    <h6 class=" text-muted mb-3">Categories</h6>
                   
                    <div class="d-flex flex-wrap">
                        <div
                            class="rounded-pill d-inline bg-line text-black font-weight-normal d-flex justify-content-center align-items-center px-3  py-1 mr-2">
                            Food
                        </div>
                    </div>

                </div>

            </div>
       </div>
    </div>
</div>
  )
}
