import React from 'react'
import { StyledSidebar } from './style/StyledSidebar'
import routes from '../routes'
export default function Sidebar() {
  return (
    <StyledSidebar>
    <div className='sidebar'>
        
        <div className='.sidebarWrapper'>
            {routes.map((routes)=><div>{routes.name}</div>)}
        </div>
    </div>
    </StyledSidebar>
  )
}
