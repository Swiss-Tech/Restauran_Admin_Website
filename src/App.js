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
import { authactionCreators, menuActionCreators , categoryActionCreators, accountActionCreators } from "./actions";
import RestaurantInformation from "./pages/restaurant-information/Restaurant_Information";

import { restaurantInfoStatus } from "./services/account.service"; 

import { logout_function } from "./services/auth.service";



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

import ResponsiveDrawer from "./Drawer";
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

const currentTime = new Date()
const expires = new Date (JSON.parse(localStorage.getItem("expires")));







var loginTimeExpire = new Date(localStorage.getItem("logintime"));
loginTimeExpire.setHours(loginTimeExpire.getHours(), loginTimeExpire.getMinutes()+5,);


useEffect(()=>{
  if( loginTimeExpire < new Date() && JSON.parse(localStorage.getItem("isRefreshCalled"))===false){
    console.log("expired")
    console.log(new Date(localStorage.getItem("logintime")));
    console.log(loginTimeExpire);
    localStorage.removeItem("logintime");
    localStorage.setItem("isRefreshCalled", true);
    // implement refresh token 
    var myHeaders = new Headers();

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://165.232.80.134/test/admin/auth/token/refresh", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log('error here', error));
  logout_function();
  }
  
  else{
    // logout_function()
  //  console.log("token is not expired")
  //  console.log(new Date());
  //  console.log(loginTimeExpire);
  }
})


useEffect(()=>{
if(currentTime > expires ){
logout_function();
}
else{
  // logout_function();
  console.log(expires);
  console.log("refreh token not expired")
  // console.log(currentTime)
  // console.log(expires)
}
})
console.log(AccountActionController.getDashboardData())
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

<div className="sidebar" style={(firstTimecontroller) ?{
 display:'none'
}:authController.isLoggedIn ? hasData ? pathName ==='/login' || pathName ==='/restaurantinformation' || pathName ==='/signup' || pathName==='/account' ?{
  display:'none'
}:{
  
}:{
  display:'none'
} :{
  display:'none'
}}>
  
  <ResponsiveDrawer/>

   
</div>


      
       

       <div className="main"  style={{
        dispaly:'none'
       }}>
       <Routes>
            

   <Route path="/" element={ firstTimecontroller === false ? authController.isLoggedIn ? hasData ? <Navigate to="dashboard" /> : hasData === false ?<Navigate to="restaurantinformation"/> : <div
          className="container-fluid vh-100"
 
        >
         <Loader/>
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






