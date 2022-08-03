import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import routes from './routes'
import { StyledHome } from './StyledHome'
import { StyledSidebar } from './sidebar/style/StyledSidebar'

import { BsArrowLeftSquare } from "react-icons/bs";

import { MdKeyboardArrowRight } from "react-icons/md";
import FeaturedProduct from './order/check'
import OrderDetail from './order/orderDetail/OrderDetail'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { messageActionCreators } from '../../actions'
import { Route,Routes,Navigate } from 'react-router'


var Link = require("react-router-dom").Link;
 


export default function Home() {


    const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
    const controller = useSelector((state)=>state.message);
    const [routeIndex, setRouteIndex] = useState(0);
    const [routePath ,setRoutePath] = useState(routes[0]);
    const  handleBack=()=>{
        routeIndex=routeIndex-1;
        routeIndex === 0 || routeIndex < 0 ? setRouteIndex(0) : setRouteIndex( routeIndex-1)
    }

   
    const dispatch = useDispatch();
  const ActionController = bindActionCreators(messageActionCreators, dispatch);
 
    

  return (

    <div>

{/* large device */}
    <StyledHome>
         <div className='containerAll' >
         {/* nav bar */}
     <StyledSidebar>

       <div className='sidebar d-flex flex-column'>
       <div class=" logo d-flex justify-content-between align-items-center">
                    <span >
                        <h5 class=" text-logo pt-2 font-weight-bold ml-2">FOOD<span style={{
                             color:'orange',
                             
                        }}>VIO</span></h5>
                    </span>       
                 <BsArrowLeftSquare onClick={()=>{
                     ActionController.clearMessage(); 
                 }} color='black'/>
                    
                </div>
                
               
       <div className='sidebarWrapper'>
            {routes.map((route,index)=><div key={route}>
            
            
            <div className='sidebartitle' onClick={()=>{
                
           setRoutePath(route)
           ActionController.clearMessage(); 
            }} style={(route === routePath) ? {
                backgroundColor :'#fff7d9'
             }: ( route.additionalRoutes.includes(routePath))  ? {
                backgroundColor :'#f8f8f8'
             } :{}} >
            
             <div className='titleSection'> <div className='titleIcon' style={(route === routePath) ?{
                color:'orange'
             }:{}}>{route.icon}</div>
             
              <div className='title'>  {route.name}</div></div>
              {route.additionalRoutes.length === 0 ? <div></div> : <div>
                {
                    <div><MdKeyboardArrowRight color='gray'/></div>
                }
            </div>
                
            } 


            </div>
            
            
            {route.additionalRoutes.length === 0 ? <div></div> : <div>
                {
                    route.additionalRoutes.map((route)=><div onClick={()=>{
                        setRoutePath(route);
                        ActionController.clearMessage(); 

                        
                    }} style={(
                        
route === routePath 
                    ) ?{
                        paddingLeft:"75px",
                        color:'#FECB16'
                    }:{paddingLeft:"75px",}}>
                        {route.name}
                    </div>
                        
                    )
                }
            </div>
                
            } 
            
            </div>)}
        </div>
    </div>
    </StyledSidebar>














    
    <div className='pages' id={routePath.route}> 

   
  
    { controller.message ? <OrderDetail/> : routePath.component }

        {/* {layout.component} */}
    </div>

 
        
         </div>
        
    </StyledHome>
    </div>
  )
}
