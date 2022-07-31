import Icon from "@mui/material/Icon";

import { MdDashboard } from "react-icons/md";
import { BsBag , BsPersonCircle} from "react-icons/bs";
import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";




const routes = [
    {
    
      name: "Dashboard",
      key: "dashboard",
      icon: <MdDashboard/>,
      route: "/dashboard",
      additionalRoutes:[]
    },
    {
    
        name: "Orders",
        key: "order",
        icon: <BsBag/>,
        route: "/order",
        additionalRoutes :[
            {
               
        name: "New Orders",
        key: "neworder",
        icon: <Icon fontSize="small">order</Icon>,
        route: "/neworder",
            },
        ]
      },
      {
      name: "Menu",
      key: "menu",
      icon: <IoFastFoodOutline/>,
      route: "/menu",
   
      additionalRoutes :[
        {
          name: "Add New Menu",
      key: "addMenu",
      icon: <IoFastFoodOutline/>,
      route: "/addMenu",
      additionalRoutes:[]
        },
     {
      
name: "Catagories",
key: "catagories",
icon: <Icon fontSize="small">order</Icon>,
route: "/catagories",
additionalRoutes:[]
  },


    ],
    

      },
      {
        type: "collapse",
      name: "Customers",
      key: "customers",
      icon: <IoPeopleOutline/>,
      route: "/customers",
      
      additionalRoutes:[]
      },
      {
        type: "collapse",
      name: "Employees",
      key: "employees",
      icon: <BsPersonCircle/>,
      route: "/employees",
      additionalRoutes:[]
      }
    
   
  ];
  
  export default routes;
  