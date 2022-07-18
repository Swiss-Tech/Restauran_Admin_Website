import React from 'react'
import OrderTable from '../order/OrderTable'

export default function Employees() {
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div class="row">
        <div class="col">
           
            <h3 class="font-weight-bolder">Eemployees</h3>
          
            <p>12-12-2020</p>
        </div>

    </div>
    <div class="dropdown-divider"></div>
    <div class="row w-100 pt-3  ml-0  ">
    <div class="col-lg-7 px-0">
    <div
                class="col-lg-6 d-flex flex-lg-row flex-column  align-items-lg-center align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">

            </div>
            <OrderTable/>

    </div>
    <div class="col-lg-5 ">
    <form class="needs-validation" novalidate >
    <div
                    class="d-flex flex-column bg-white px-5 py-5 mx-lg-0 mb-lg-0 mb-5  rounded-lg ml-lg-5 mt-lg-0 mt-3">
                        <h5 class="font-weight-bold mb-4">Add employee</h5>
                        <div class="dropdown-divider mb-3"></div>
                        <div class="form-group">
                        <label class="font-weight-normal h6 " for="employee-name">'employee_name' |
                            </label>
                        <input type="text" class="form-control" formControlName="employeeName" name=""
                            id="employee-name" placeholder=""/>
                 
                        <div class="form-control-feedback text-danger"
                            >
                            Please Add employee name
                        </div>
  
                        <div class="form-control-feedback text-success">
                            Looks Good
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="font-weight-normal h6 " for="confirm-password">Email
                            </label>
                        <input type="email" class="form-control" formControlName="email" name="" id="email"
                            placeholder=""/>
                       
                        <div class="form-control-feedback text-danger"
                            >
                            Please enter password again
                        </div>
                   
                        <div class="form-control-feedback text-success" >
                            Looks Good
                        </div>

                    </div>
                    <div class="form-group">
                        <label class="font-weight-normal h6 " for="password">password 
                            </label>
                        <input type="password" autocomplete="on" class="form-control" formControlName="password" name=""
                            id="password" placeholder=""/>
                       
                        <div class="form-control-feedback text-danger"
                            >
                            Please enter password
                        </div>
                    
                        <div class="form-control-feedback text-success" >
                            Looks Good
                        </div>

                    </div>
                    <div >
                        <button click="saveEmployee()" type="button"
                            class="btn btn-primary px-5 py-2 font-weight-bold ml-2 d-inline mt-2">Add Employee
                            </button>
                    </div>
                    <ng-template >
                        <div class="d-flex justify-content-center align-items-center mt-5"><button
                                type="button"
                                class="btn btn-primary px-5 py-2 font-weight-bold ml-2 d-inline mt-2">'update_employee'
                                </button></div>
                    </ng-template>
                    </div>
    </form>
    </div>
    </div>
    </div>
  )
}
