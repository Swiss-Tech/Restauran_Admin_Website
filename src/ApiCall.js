import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { customerActionCreators, menuActionCreators, orderActionCreators,accountActionCreators, employeeActionCreators, dashboardActionCreators , messageActionCreators} from './actions'
import authHeader from './services/auth-header'
import jwt_decode from "jwt-decode";
import { checkAdminStatus , checkRestaurantStatus } from './services/auth.service'
export default function apiCall(dispatch) {

 
    const token = authHeader();
    var decoded = jwt_decode(token);
    checkAdminStatus()
    checkRestaurantStatus();
    const AccountActionController = bindActionCreators(accountActionCreators,dispatch);
    const CustomerActionController = bindActionCreators(customerActionCreators,dispatch);
    const MenuActionController = bindActionCreators(menuActionCreators,dispatch);
    const OrderActionController = bindActionCreators(orderActionCreators,dispatch);
    const EmployeeActionController = bindActionCreators(employeeActionCreators,dispatch);
     const DashboardActionCreators = bindActionCreators(dashboardActionCreators,dispatch);
     const MessageActionCreators = bindActionCreators(messageActionCreators, dispatch);
     MessageActionCreators.clearMessage();
     DashboardActionCreators.getDashboardData();
    AccountActionController.getRestaurantInformationAction();
    AccountActionController.getAdminInformationAction();
    
    CustomerActionController.getAllCustomersAction();
    MenuActionController.getallmenues();
    OrderActionController.getAllOrdersAction();
    EmployeeActionController.getAllEmployeesAction();
  
    if(JSON.parse(localStorage.getItem("type"))===null){
       
        localStorage.setItem("type", JSON.stringify(decoded['_at_']))
    }{
       
    }
}
