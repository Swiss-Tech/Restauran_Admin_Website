// import React from 'react'
// import { Outlet } from 'react-router'
// import { Link } from 'react-router-dom'

// export default function Tabs() {
//   return (
//     <div>
// demo 
// <Link to="orderdetail">helo</Link>
// <div></div>
// <Link to="neworder">new</Link>

//     <Outlet/>
    
//     </div>
//   )
// }

// import Home from "./pages/Home";
// import BrandHome from './pages/BrandHome';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import BHome from "./pages/Brand/BHome";
// import EHome from "./pages/Establishment/EHome";
// import EstOverview from "./pages/Establishment/EstOverview";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Products from "./pages/Brand/Products";
// import Overview from "./pages/Brand/Overview";
// import Campaigns from "./pages/Brand/Campaigns";
// import Stats from "./pages/Brand/Stats";
// import SettingsHome from "./pages/SettingsHome";
// import ProductForm from "./pages/Brand/ProductForm";
// import CampaignsForm from "./pages/Brand/CampaignsForm";
// import EstProducts from "./pages/Establishment/EstProducts";
// import Beacons from "./pages/Establishment/Beacons";
// import EstProductForm from "./pages/Establishment/EstProductForm";
// import BeaconForm from "./pages/Establishment/BeaconForm";
// import EstInformation from "./pages/Establishment/EstInformation";
// import BrandInfo from "./pages/Brand/BrandInfo";
// import Account from "./pages/Account";
// import Notifications from "./pages/Establishment/Notifications";
// import EstablishmentSignup from "./pages/EstablishmentSignup";
// import BrandSignup from "./pages/BrandSignup"
// import AdminLogin from "./pages/Admin"
// import AdminHome from "./pages/AdminHome";
// import SearchBrand from "./pages/Brand/Search";
// import SearchEstablishment from "./pages/Establishment/Search";
// import Unauthorized from "./pages/Unauthorized";
// import NotFound from "./pages/NotFound";
// import PickUserTpe from "./pages/PickUserType";
// import Terms from "./pages/Terms";


// function App() {
//   const loggedIn = useSelector(state => state.user.loggedIn)
//   const isAdmin = useSelector(state => state.user.isAdmin)

//   const user = useSelector(state => state.user.user)
//   const brand = useSelector(state => state.brand.brand)
//   const establishment = useSelector(state => state.establishment.establishment)


//   var userType = 0
//   user != null ? userType = user.userType : userType = 0
//   return (

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={isAdmin ? <Navigate replace to="/admin/home" /> : loggedIn && userType == 1 ? <Navigate replace to="/brand" /> : loggedIn && userType == 2 ? <Navigate replace to="/establishment" /> : <Home />} />

//         <Route path="brand" element={isAdmin ? <Navigate replace to="/admin/home" /> : loggedIn && userType == 1 && brand != null ? <BHome /> : loggedIn && userType == 1 && brand == null ? <Navigate replace to="/BrandSignUp" /> : <Navigate replace to="/login" />}>
//           <Route index element={<Overview />} />
//           <Route path="products" element={<Products />} />
//           <Route path="products/:id/edit" element={<ProductForm edit={true} />} />
//           <Route path="products/add" element={<ProductForm />} />
//           <Route path="campaigns" element={<Campaigns />} />
//           <Route path="campaigns/:id/edit" element={<CampaignsForm edit={true} />} />
//           <Route path="campaigns/add" element={<CampaignsForm />} />
//           <Route path="statistcs" element={<Stats />} />
//           <Route path="search" element={<SearchBrand />} />

//           <Route path="settings" element={<SettingsHome />}>
//             <Route index element={<Account />} />
//             <Route path="business" element={<BrandInfo />} />
//           </Route>
//         </Route>
//         <Route path="establishment" element={isAdmin ? <Navigate replace to="/admin/home" /> : loggedIn && userType == 2 && establishment != null ? <EHome /> : loggedIn && userType == 2 && establishment == null ? <Navigate replace to="/EstSignUp" /> : <Navigate replace to="/login" />}>
//           <Route index element={<EstOverview />} />
//           <Route path="notifications" element={<Notifications />} />

//           <Route path="products" element={<EstProducts />} />
//           <Route path="products/:id/edit" element={<EstProductForm edit={true} />} />
//           <Route path="products/:id/add" element={<EstProductForm />} />
//           <Route path="beacons" element={<Beacons />} />
//           <Route path="beacons/:id/edit" element={<BeaconForm edit={true} />} />
//           <Route path="beacons/add" element={<BeaconForm />} />
//           <Route path="search" element={<SearchEstablishment />} />


//           <Route path="settings" element={<SettingsHome />}>
//             <Route index element={<Account />} />
//             <Route path="business" element={<EstInformation />} />
//           </Route>


//         </Route>
//         <Route path="login" element={<Login />} />
//         <Route path="EstSignUp" element={<EstablishmentSignup />} />
//         <Route path="BrandSignUp" element={<BrandSignup />} />
//         <Route path="BrandSignUp" element={<BrandSignup />} />
//         <Route path="admin" element={<AdminLogin />} />
//         <Route path="admin/home" element={!isAdmin ? <Navigate replace to="/" /> : <AdminHome />} />


//         <Route path="pickType" element={<PickUserTpe />} />
//         <Route path="signup" element={<Signup />} />
//         <Route path="terms" element={<Terms />} />

//         <Route path="*" element={<NotFound />} />

//       </Routes>
//     </BrowserRouter>

//   );
// }

// export default App;