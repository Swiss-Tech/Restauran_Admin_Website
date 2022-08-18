import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes,Link, Route , Outlet, Navigate, useLocation, useNavigate} from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./Global";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { authactionCreators, menuActionCreators , categoryActionCreators, accountActionCreators, orderActionCreators } from "./actions";
import RestaurantInformation from "./pages/restaurant-information/Restaurant_Information";
import Dashboard from './pages/home/dashboard/Dashboard';
import Order from './pages/home/order/Order';
import NewOrder from './pages/home/order/newOrder/NewOrder';
import OrderDetail from './pages/home/order/orderDetail/OrderDetail';
import Menus from './pages/home/menu/Menus';
import AddNewMenu from './pages/home/menu/newMenu/AddNewMenu';
import MenuDetail from './pages/home/menu/menu-detail/MenuDetail';
import EditMenu from './pages/home/menu/edit-menu/EditMenu';
import Catagories from './pages/home/menu/catagories/Catagories';
import Customers from './pages/home/customers/Customers';
import Employees from './pages/home/employees/Employees';
import Account from "./pages/account/Account";
import Loader from "./pages/reusable-components/Loader";
import apiCall from "./ApiCall";
import ResponsiveDrawer from "./Drawer";
import AdminEdit from "./pages/account/edit-admin/AdminEdit";
import EditRestaurantInformation from "./pages/account/edit-restaurant-information/Restaurant_Information";
import { checkRestaurantStatus , checkAdminStatus, logout_function } from "./services/auth.service";
const theme = {
  colors: {
    primary: "#FECB16",
    body: "#ffffff",
    border: "#000",
    title: "#000",
  },
};

export default  function App()  {

  const controller = useSelector((state) => state.first_time);
  const firstTimecontroller = useSelector((state) => state.first_time);
  
  
  const authController = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
   const menuController = useSelector((state) => state.menu);
  const categoryController = useSelector((state) => state.category);
  const ActionController = bindActionCreators(authactionCreators, dispatch);
  const MenuActionController = bindActionCreators(menuActionCreators, dispatch);
  const AccountActionController = bindActionCreators(accountActionCreators, dispatch);
  const OrderActionController = bindActionCreators(orderActionCreators, dispatch);
  const CategoryActionContoller = bindActionCreators(categoryActionCreators , dispatch);
  const orderController = useSelector((state)=>state.order);
  const [hasData , setHasData] = useState();

  
 
 
    useEffect(()=>{
      callingApi()
    },[]);
  function callingApi(){
    if(authController.isLoggedIn){
      if(menuController.menus.length === 0 ){
        MenuActionController.getallmenues();
       

        }
       if(categoryController.categories.length===1){
        CategoryActionContoller.getAllCatagoryAction();
       }
       if(orderController.orders===0){
        OrderActionController.getAllOrdersAction();
       }
    }
  }



const pathName= window.location.pathname

const currentTime = new Date()
const expires = new Date (JSON.parse(localStorage.getItem("expires")));







var loginTimeExpire = new Date(localStorage.getItem("logintime"));
loginTimeExpire.setHours(loginTimeExpire.getHours()+23, loginTimeExpire.getMinutes()+59, loginTimeExpire.getSeconds()+59);






useEffect(()=>{
if(loginTimeExpire === Date() ){
  logout_function();
}
},[])



useEffect(()=>{
  if(authController.isLoggedIn){
   // apiCall(dispatch);
  }

},[])

checkAdminStatus();
checkRestaurantStatus();
 const isRestaurant = JSON.parse( localStorage.getItem("restaurantExist")) ;
 const isAdmin = JSON.parse( localStorage.getItem("adminExist"));
 




  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <BrowserRouter>
       <Routes>


      
            



       
   <Route path="/" element={ 
    isAdmin ?
          authController.isLoggedIn ?
              isRestaurant
               ? <ResponsiveDrawer/> 
              : isRestaurant===false ? <Navigate to="restaurantinformation"/> :<Loader/> 
          : <Navigate to="login"/> 
          
    :isAdmin==false ?<Navigate to="landing"/> :<Loader/> }>
    <Route index element={ <Dashboard/>}/>
   {/* order */}

   <Route path='order' > 
     <Route index element ={<Order/>} />
     <Route path='neworder' element = {<NewOrder/>}/> 
     <Route path="orderDetail/:orderId" element = {<OrderDetail/>}/> 
      
   </Route>

   {/* menu */}
   <Route path="menu">
    <Route index element={<Menus/> }/>
    <Route path='addMenu' element={<AddNewMenu/>}/>
    <Route path ="menudetail/:menuId" element={<MenuDetail/>}/> 
    <Route path ="editmenu/:menuId" element={<EditMenu/>}/> 
    <Route path='catagories' element={<Catagories/>}/>

   </Route>
   <Route path='catagories' element={<Catagories/>}/>
   <Route path='neworder' element = {<NewOrder/>}/> 
   <Route path='addMenu' element={<AddNewMenu/>}/>
   <Route path="customers" element={<Customers/>}/>
   <Route path='employees' element ={<Employees/>}/>
 
   <Route path ="account" element={<Account/>} />
   <Route path="/edit/restaurantinformation" element={<EditRestaurantInformation/>}/>
   <Route path="/edit/admin" element={<AdminEdit/>}/>
        </Route>
        
        <Route path="/restaurantinformation" element={<RestaurantInformation />} />
    <Route path="/login" element={<Login />}></Route>
  <Route path="/signup" element={<Signup />}></Route> 
   <Route path="/landing" element={<Landing />}></Route>
  

        
 
          
        
           

            
            


          </Routes>
      





       
      
        </BrowserRouter>
      </GlobalStyle>
    </ThemeProvider>
  );


}






