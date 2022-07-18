import React , {useState} from 'react'
import Tabs from './Tabs';

export default function Menus() {
    
    
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">
    <div class="row">
        <div class="col-lg-8">
          
            <h3 class="font-weight-bolder">Menus</h3>
            <p>12/12/2022</p>

        </div>
       
        <div class="col-lg-4 d-flex justify-content-lg-end">
            <div>
             
                <button routerLink="'/Dashboard/Menus/Categories'"
                    class="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        class="material-icons-outlined medium mr-2">
                        tune
                    </span>Manage Catagory</button>
            </div>

        </div>
    </div>
    <div class="dropdown-divider"></div>
    <Tabs/>
    


    
    
 </div>
  )
}
