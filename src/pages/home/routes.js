import Icon from "@mui/material/Icon";

import { MdDashboard } from "react-icons/md";
import { BsBag , BsPersonCircle} from "react-icons/bs";
import Dashboard from "./dashboard/Dashboard"
import Order from "./order/OrderList"
import NewOrder from "./order/newOrder/NewOrder";
import OrderDetail from "./order/orderDetail/OrderDetail";
import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";
import Menus from "./menu/Menus";
import AddNewMenu from "./menu/newMenu/AddNewMenu";
import Catagories from "./menu/catagories/Catagories";
import MenuDetail from "./menu/menu-detail/MenuDetail";
import EditMenu from "./menu/edit-menu/EditMenu";
import Customers from "./customers/Customers";
import Employees from "./employees/Employees";



const routes = [
    {
      type: "collapse",
      name: "Dashboard",
      key: "dashboard",
      icon: <MdDashboard/>,
      route: "/dashboard",
      component: <Dashboard/>,
      additionalRoutes:[]
    },
    {
        type: "collapse",
        name: "Orders",
        key: "order",
        icon: <BsBag/>,
        route: "/order",
        component: <Order/>,
      
        additionalRoutes :[
            {
                type: "collapse",
        name: "New Orders",
        key: "newOrder",
        icon: <Icon fontSize="small">order</Icon>,
        route: "/neworder",
        component: <NewOrder/>,
      

            },
        ]
      },
      {
        type: "collapse",
      name: "Menu",
      key: "menu",
      icon: <IoFastFoodOutline/>,
      route: "/menu",
      component: <Menus/>,
      additionalRoutes :[
        {
            type: "collapse",
    name: "Add New Menu",
    key: "newMenu",
    icon: <Icon fontSize="small">order</Icon>,
    route: "/newmenu",
    component: <AddNewMenu/>,   },
    {
      type: "collapse",
name: "Catagories",
key: "catagories",
icon: <Icon fontSize="small">order</Icon>,
route: "/catagories",
component: <Catagories/>   },
{
  type: "collapse",
name: "Menu Detail",
key: "menudetail",

route: "/menudetail",
component: <MenuDetail/>   },
{
  type: "collapse",
name: "Edit Menu",
key: "edittMenu",

route: "/editMenu",
component: <EditMenu/>   },

    ],
    

      },
      {
        type: "collapse",
      name: "Customers",
      key: "customers",
      icon: <IoPeopleOutline/>,
      route: "/customers",
      component: <Customers/>,
      additionalRoutes:[]
      },
      {
        type: "collapse",
      name: "Employees",
      key: "employees",
      icon: <BsPersonCircle/>,
      route: "/employees",
      component: <Employees/>,
      additionalRoutes:[]
      }
    
   
  ];
  
  export default routes;
  