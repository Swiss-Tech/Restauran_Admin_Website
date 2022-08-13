import React , {useState , useEffect}from 'react'
import { StyledSidebar } from './style/StyledSidebar'
import routes from '../routes'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquare } from 'react-icons/bs'
import { MdKeyboardArrowRight , MdKeyboardArrowUp } from 'react-icons/md'
import { useNavigate , useLocation } from 'react-router-dom'
import { color } from '@mui/system'
import { Navigate } from 'react-router-dom'
 
export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate()
const [showChild , setShowChild] = useState(false);
const [currentIndex , setIndex] = useState();
const [changeBackground , setChangeBackground] = useState(false);
var type =  JSON.parse(localStorage.getItem("type")).toLowerCase();
var userType = type.split('_')[0];






 


console.log(showChild)
  return (
    <StyledSidebar>

<div className='sidebar d-flex flex-column '>
       <div class=" logo d-flex justify-content-between align-items-center">
                    <span >
                        <h5 class=" text-logo pt-2 font-weight-bold ml-2">FOOD<span style={{
                             color:'orange',
                             
                        }}>VIO</span></h5>
                    </span>       
                 <BsArrowLeftSquare size={20} onClick={()=>{
                   navigate(-1)
                 }} color='black'/>
                    
                </div>
                
               
       <div className='sidebarWrapper'>

            {routes.map((route,index)=>
            
            <div key={route} style={(userType==="super")?{}:{
           display : route.key === "employees" || route.key ==="customers" ?"none":""
            }}>
            
            
            <div className='sidebartitle'  style={{
              backgroundColor: route.route === location.pathname ?  '#fff7d9' :showChild & currentIndex===index ?'#eeeeee': '',
              
             }} onClick={()=>{
              if(route.additionalRoutes.length === 0){
                setShowChild(false);
                setIndex(index);
              }else{
                setShowChild(!showChild);
                setIndex(index);
              }
             }}  >
            
             <div className='titleSection'>
            

             
             <Link to={ route.route }  style={{
              color: route.route === location.pathname ? 'black' : showChild & currentIndex===index ?'black':'gray',
              gap:'20px',
              textDecoration:'none' 
             }} onClick={()=>{
             
             }}>  
              <div className='titleIcon' style={{
             color: route.route === location.pathname ? 'orange' :''
             }}>{route.icon}</div> <div className='title'>  {route.name}</div></Link>
              
              </div>
              {route.additionalRoutes.length === 0 ? <div></div> : <div>
                {
                    <div> { route.route === location.pathname && showChild?  <MdKeyboardArrowUp size={20} color='gray' style={{
                      marginTop:'5px',
                      marginRight:'15px'
                    }}/>: <MdKeyboardArrowRight size={20} color='gray' style={{
                      marginTop:'5px',
                      marginRight:'15px'
                    }}/>}</div>
                }
            </div>
                
            } 
            


            </div>
            
            
            {route.additionalRoutes.length === 0 ? <div></div> : <div style={{
              display:showChild & currentIndex===index ? '':'none'
            }}>
                {
                    route.additionalRoutes.map((subRoute)=><div style={{
                        paddingLeft:"55px",
                       
                        
                    }} onClick={()=>{
                      setChangeBackground( location.pathname.toLowerCase().includes(route.route.toLowerCase()))
                    
                    }}>
                       <Link to={subRoute.route} style={{
                        textDecoration:'none',
                        color: location.pathname === subRoute.route ?  '#FECB16':'gray',
                       }}> {subRoute.name}</Link>
                    </div>
                        
                    )
                }
            </div>
                
            } 
            
            </div>
            )
            
            }
        </div>
        
        
     <div   className=' fixed-bottom account ' onClick={()=>{
      navigate('/account')
     }} style={(userType==="super") ? {
      width:'2000px'
     }:{
      display:'none'
     }} >
     <img class="rounded-circle mb-lg-0 mb-4 bg-primary  " style={{
    
}}
    width="60px" height="60px"           src="https://thumbs.dreamstime.com/z/injera-firfir-typical-ethiopian-food-flatbread-fasting-traditional-lunch-teff-beats-potato-dahl-lentils-cuisine-african-plate-farm-160097632.jpg"  />
     <div className='  ml-5 mt-1 justify-content-center'>
        <div className='  font-extrabold' >Woynshet Bilihatu</div>
        <div className=' text-muted'>Admin</div>
       </div>
    </div>
      
    </div>
 
    </StyledSidebar>
  )
}
