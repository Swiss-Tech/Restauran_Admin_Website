import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { customerActionCreators, menuActionCreators, orderActionCreators,accountActionCreators, employeeActionCreators, } from './actions'
import authHeader from './services/auth-header'
import jwt_decode from "jwt-decode";
export default function apiCall(dispatch) {

 
    const token = authHeader();
    var decoded = jwt_decode(token);
    const AccountActionController = bindActionCreators(accountActionCreators,dispatch);
    const CustomerActionController = bindActionCreators(customerActionCreators,dispatch);
    const MenuActionController = bindActionCreators(menuActionCreators,dispatch);
    const OrderActionController = bindActionCreators(orderActionCreators,dispatch);
    const EmployeeActionController = bindActionCreators(employeeActionCreators,dispatch);

    AccountActionController.getDashboardData();
    CustomerActionController.getAllCustomersAction();
    MenuActionController.getallmenues();
    OrderActionController.getAllOrdersAction();
    EmployeeActionController.getAllEmployeesAction();
    console.log(decoded['_at_']);
    if(JSON.parse(localStorage.getItem("type"))===null){
       
        localStorage.setItem("type", JSON.stringify(decoded['_at_']))
    }{
       
    }
}
