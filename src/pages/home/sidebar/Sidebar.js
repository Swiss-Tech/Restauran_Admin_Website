import React from 'react'
import { StyledSidebar } from './style/StyledSidebar'
import routes from '../routes'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquare } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
export default function Sidebar() {
  return (
    <StyledSidebar>

 <div className='sidebar d-flex flex-column'>

 <div class=" logo d-flex justify-content-between align-items-center">
                    <span >
                        <h5 class=" text-logo pt-2 font-weight-bold ml-2">FOOD<span style={{
                             color:'orange',
                             
                        }}>VIO</span></h5>
                    </span>       
                 <BsArrowLeftSquare onClick={()=>{
                   
                 }} color='black'/>
                    
                </div>
                <div className='sidebarWrapper' style={{

                }}>
                {routes.map((routes)=>
            <Link className='sidebartitle' to={ routes.route } style={{
              color:"black", 
              textDecoration:'none'
            
            }}>
                <div>
                <div className='title'> {routes.name} {routes.additionalRoutes.length === 0 ? <div></div> : <MdKeyboardArrowRight/>} </div>
                 
                 <div>
 
                 {routes.additionalRoutes.length === 0 ? <div></div> : 
                  routes.additionalRoutes.map((subRoute)=><Link to={subRoute.route}>
                    {subRoute.name}
                  </Link>)
                  
                  }
                 </div>
                </div>
                
                
             </Link>)}
                </div>

 </div>
    {/* <div className='sidebar'>
        
        <div className='.sidebarWrapper'>
            {routes.map((routes)=>
            <Link className='sidebartitle' to={ routes.route }>
                 {routes.name}
                 
                <div>
                {routes.additionalRoutes.length === 0 ? <div></div> : 
                 routes.additionalRoutes.map((subRoute)=><Link to={subRoute.route}>
{subRoute.name}

                 </Link>)
                 
                 }
                </div>
             </Link>)}
        </div>
    </div> */}
    </StyledSidebar>
  )
}
