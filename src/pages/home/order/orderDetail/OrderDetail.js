import React from 'react'
import { useLocation } from 'react-router';
import { Dropdown } from 'react-bootstrap';

import { BsPerson } from "react-icons/bs";

export default function OrderDetail() {
    const location =useLocation();
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">
        <div class="alert-position">
        <alert  type="getAlertMessage().type" dismissible="dismissible"
            onClosed="onClosed(getAlertMessage())" dismissOnTimeout="3000">
            {/* getAlertMessagemsg */}
            </alert>

    </div>

    <div class="row flex justify-content-between">
        <div class="col">
        
            <h3 class="font-weight-bolder"><span role="button" click="backClicked()"
                    class="material-icons-outlined mr-2   medium p-0">
                    -
                </span>Order id </h3>
          
            <p>12-12-12</p>
        </div>
        <div class="col   ">
         
            <div class=" d-flex w-auto align-items-center px-4   justify-content-end">
                <div  >

                  
                    <div 
                        class="px-4 bg-lightSecondary small py-2 font-weight-bold text-secondary d-flex justify-content-center align-items-center rounded">
                       status</div>
           
                    <div 
                        class="px-4 bg-lightPrimary small py-2 font-weight-bold text-warning d-flex justify-content-center align-items-center rounded">
                        status 1</div>
                    
                    <div
                        class="px-4 bg-lightSuccess small py-2 font-weight-bold text-success d-flex justify-content-center align-items-center rounded">
                       status 2</div>
              
                    <div 
                        class="px-4 bg-lightDanger small py-2 font-weight-bold text-danger d-flex justify-content-center align-items-center rounded">
                        status 3</div>
                </div>
            </div>
        </div>
        
    

        </div>

        <div class="dropdown-divider"></div>
    <div class="row h-100 pt-4">
        <div class="col-lg-8 ">
            <div class="table-responsive w-100">
                <table class="table table-borderless w-100 " style={{
                  height:'400px'
                }}>
                  
                    <thead>
                        <tr>

                            <th scope="col">Item</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                  
                    <tbody>
                        <tr  class=" rounded-lg py-2 ">

                            <td class="d-flex flex-lg-row flex-column bg-white">
                             
                                <img class="rounded-lg mr-3 mb-2 mb-lg-0 " src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" width="80px"
                                    height="80px" alt=""/>

                                <div class="d-flex flex-column justify-content-center ">
                                   
                                    <h5 style={{
                                      paddingLeft:'20px'
                                    }}>Sea Food</h5>
                                    
                                    <div class="d-flex flex-wrap">
                                        <div 
                                            class="rounded-pill bg-inputBg text-black font-weight-normal d-inline-flex justify-content-center align-items-center px-3 py-1 mr-2 mb-2 mt-2">
                                           Seafood
                                        </div>
                                        <div 
                                            class="rounded-pill bg-inputBg text-black font-weight-normal d-inline-flex justify-content-center align-items-center px-3 py-1 mr-2 mb-2 mt-2">
                                           30 -40 min
                                        </div>
                                        

                                    </div>
                                </div>
                            </td>
                         
                            <td class="bg-white center-vert">15x</td>
                      
                            <td class="bg-white center-vert">$1200</td>
                  
                            <td class="bg-white center-vert">$1200</td>
                        </tr>

                    </tbody>
                </table>
            </div>
   
            <div class="row  justify-content-lg-end justify-content-center text-black my-3">
                <pagination  totalItems="contentArray.length"
                    pageChanged="pageChanged($event)" maxSize="6" rotate='true' itemsPerPage="itemPerPage">
                </pagination>
            </div>
            
            <div class=" row d-flex bg-black w-100 p-4 rounded-lg align-items-center m-0 mt-5" style={{
              borderRadius:'10px'
            }}>
                <div class="col-lg-3 col-6 mb-lg-0 mb-4 d-flex flex-column">
                    <p class="text-white">Total Orders</p>
                
                    <h4  class="text-white">12 Items</h4>
                </div>
                <div class="col-lg-3 col-6 mb-lg-0 mb-4 d-flex flex-column">
                    <p class="text-white">Total Payment</p>
                  
                    <h4 class="text-white">$150</h4>
                </div>
                <div class="col-lg-3 col-6 mb-lg-0 mb-4 d-flex flex-column">
                <Dropdown>
      <Dropdown.Toggle style={{
        border:'none',
        height:'50px',
        width:'80%',
        
      }} variant="success" id="dropdown-basic">
        Accept        
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="">Reject</Dropdown.Item>
        <Dropdown.Item href="">Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </div>
                <div class="col-lg-3 col-6 mb-lg-0 mb-4 d-flex flex-column">
                    <button className='finshButton'>Finish</button>
                </div>
                

               
              
              <div>
              
              </div>


               
                
   
        
                

            </div>
        </div>
        <div class="col-lg-4 px-lg-5 px-3 mt-lg-0 mt-4">
           
            <div class="bg-white rounded-lg d-flex flex-column p-lg-5 p-4">
                <div class="d-flex mb-2">
                   <div class="rounded-lg mr-2 " style={{
                    backgroundColor:'#FECB16',
                    color:'white',
                    borderRadius:'15px',
                    width:'75px',
                    height:'80px',
                    alignItems:'center',
                    textAlign:'center',
                    justifyContent:'center',
                    display:'flex'
                    
                   }}>
                   <BsPerson  size={'40px'} />
                   </div>
                   
                 

                    <div class="d-flex flex-column justify-content-center ml-3">
                       
                        <h4 class="font-weight-bold m-0 mb-1 ml-16" style={{
                          paddingLeft:'10px'
                        }}>Woynshet bilihatu</h4>
                      
                        <h6 class="text-muted" style={{
                          paddingLeft:'10px'
                        }}>Customer</h6>
                    </div>

                </div>
                <h6 class="text-muted medium mt-2">Phone Number</h6>
                <div class="bg-inputBg d-flex  align-items-center rounded  pl-3 py-3 mt-2" style={{
                  backgroundColor:'#f8f8f8'
                }}>
                    <h4 class="font-weight-bold m-0" style={{
                      paddingLeft:'10px'
                    }}>0964001822</h4>
                </div>
            </div>
            <div class="bg-white mt-3 d-flex flex-column p-5 rounded-lg mt-4">
                <h5 class="font-weight-bold">Customer Request</h5>
                <p class="text-muted medium text-justify" style={{
width:'30%'
                }}>#f8f8f8#f8f8f8#f8f8f8#f8f8f8#f8f8f8#f8f<br/>
                8f8#f8f8f8#f8f8f8#f8f8f8#f8f8f8#f8f8f8#f8f<br/>
                8f8#f8f8f8#f8f8f8#f8f8f88f8#f8f8f8#f8f</p>
                <p  class="text-label medium text-justify"> <br></br></p>
                <form formGroup="statusFormGroup"> <textarea type="text" rows="6" class="form-control" 
                        formControlName="statusFormControl" id="description" placeholder="Share a replay"></textarea>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
