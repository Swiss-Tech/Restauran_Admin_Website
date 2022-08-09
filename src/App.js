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
import { authactionCreators, menuActionCreators , categoryActionCreators } from "./actions";
import RestaurantInformation from "./pages/restaurant-information/Restaurant_Information";

import { restaurantInfoStatus } from "./services/account.service"; 

import { logout_function } from "./services/auth.service";


import Sidebar from './pages/home/sidebar/Sidebar';
import Dashboard from './pages/home/dashboard/Dashboard';
import Order from './pages/home/order/OrderList';
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
  const CategoryActionContoller = bindActionCreators(categoryActionCreators , dispatch);
  const [hasData , setHasData] = useState();

  
 
  restaurantInfoStatus().then((data)=>{
    setHasData(data);
  } 
    );

  function callingApi(){
    if(authController.isLoggedIn){
      if(menuController.menus.length === 0 ){
        MenuActionController.getallmenues();
        }
       if(categoryController.categories.length===1){
        CategoryActionContoller.getAllCatagoryAction();
       }
    }
  }
useEffect(()=>{
  callingApi()
},[]);


const pathName= window.location.pathname


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <BrowserRouter>
       <div style={{
        display:'flex',
       
       }}>
       
       {/* <div style={
        (firstTimecontroller === false)  ?  
       authController.isLoggedIn ? 
       hasData === true ? 
       { flex:'1'}:
       { display:'none'} : 
       
       {display:'none'} :
       
       {display:'none'}}>
   
     
</div> */}
<div style={(firstTimecontroller) ?{
 display:'none'
}:authController.isLoggedIn ? hasData ? pathName ==='/login' || pathName ==='/restaurantinformation' || pathName ==='/signup' || pathName==='/account' ?{
  display:'none'
}:{
  flex:'1'
}:{
  display:'none'
} :{
  display:'none'
}}>
    <Sidebar/>
</div>
      
       

       <div style={{
        flex:'6'
       }}>
       <Routes>
            

      <Route path="/" element={ firstTimecontroller === false ? authController.isLoggedIn ? hasData ? <Navigate to="dashboard" /> : hasData === false ?<Navigate to="restaurantinformation"/> : <div
          className="container-fluid vh-100"
 
        >
          <div className="row d-flex flex-column justify-content-center align-items-center h-100">
            <div className="spinner-border text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div> : <Navigate to="login"/>:<Navigate to="landing" />} />
      <Route path = "dashboard" element={ <Dashboard/>}/>
   {/* order */}
   <Route path='order' > 
     <Route index element ={<Order/>} />
     <Route path='neworder' element = {<NewOrder/>}/> 
     <Route path='orderDetail/:orderId' element = {<OrderDetail/>}/> 
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
   <Route path="/restaurantinformation" element={<RestaurantInformation />} />
    <Route path="/login" element={<Login />}></Route>
  <Route path="/signup" element={<Signup />}></Route> 
   <Route path="/landing" element={<Landing />}></Route> 
   <Route path ="account" element={<Account/>} />
          
        
           

            
            


          </Routes>
       </div>
       </div>
        </BrowserRouter>
      </GlobalStyle>
    </ThemeProvider>
  );


}

