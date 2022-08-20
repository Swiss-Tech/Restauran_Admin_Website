
import React , { useEffect, useState }from 'react'
import { Nav, Container, Col, Row, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { GrAdd } from "react-icons/gr";
import {BsSearch} from  "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { API_BASE_URL } from '../../../services/api-config';
import { BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { menuActionCreators } from '../../../actions';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import Loader from '../../reusable-components/Loader';
export default function Tabs() {
    const  dispatch = useDispatch();
    const navigate = useNavigate()
    const  menuController = useSelector((state)=>state.menu);
    const categoryController = useSelector((state)=>state.category);
    const [inputText, setInputText] = useState();
    
    const [activeKey, setActiveKey] = useState('1');
   
    const handleSelect = (eventKey) => setActiveKey(eventKey);
    const fetchedItems = menuController.menus;
    const [data, setData] = useState([]);
    const [imageUrl , setImageUrl] = useState();
    const [filtered , setFilter] = useState(
     []
    )
    
    const MenuActionController = bindActionCreators(menuActionCreators, dispatch);
    
    const [isLoading , setLoading] = useState(false);
   
    



    useEffect(() => {
      

      if(activeKey){
       
        filterData();
        
      }
    
     
     },[activeKey] );

       function filterData(){
     
  
        if(activeKey === '1'){
          setData(fetchedItems);
        }
        
        else{
          setData(null);


          fetchedItems.map((item)=>{
            
            
            if(item.category.some(category => category.id === activeKey))
            
    {   
        
       if(!filtered.some(isExist=>isExist.id === item.id)){
        filtered.push(item);
           } 
   
           setData(filtered);
           
    
            }
           

          },
          
          )

        }
    
       }
      const categories = categoryController.categories;


      

    
    
useEffect(()=>{
  if(inputText){
     setData(null);
     serachFilter();
  }
  else{
    filterData();
  }
},[inputText, serachFilter, filterData],)

function serachFilter()
{
   setFilter([]);

 fetchedItems.map((item)=>{

  if( item.itemName.toLowerCase().includes(inputText.toLowerCase())  )
  {

    if(filtered.some(isExist=>isExist.id === item.id)){
     
    } 
    {
      filtered.push(item);
    }
  
    setData(filtered);
  }
  
  
 })

}
 
     return ( isLoading ? <Loader/>:
    <div>
        <div className="row w-100 pt-3  ml-0">
        <div className="col-lg-6 d-flex flex-row px-0">
     
            <div className="d-flex justify-content-center align-items-center" >
                <div className="d-flex justify-content-center align-items-center 
                     px-3 py-2 rounded mr-3" style={{
              border: "1px solid black",
              backgroundColor:'white' ,
              marginLeft:"10px"
            }}>

                    <span className=" " style={{
                      fontWeight:'700',
                      fontSize:'20px' ,
                      paddingLeft:'7px',
                      paddingRight:'7px',

                    }}>{menuController.menus.length}</span> <div style={{ 
                      marginLeft:'5px',
                      color:'gray',
                      fontWeight:'600',
                      fontSize:'13px'
                    }}>Total Items</div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center" >
                <div className="d-flex justify-content-center align-items-center 
                     px-3 py-2 rounded mr-3" 
                     style={{
              border: "1px solid black",
              backgroundColor:"black",
              marginLeft:"15px",
              color:'white'
            
            }}> 
            {/* <GrAdd 
           size={10} 
            /> */}
           
            
<Link to="addMenu" style={{
  textDecoration:'none',
  color:"white",
  display:"flex"
}}>  <BsPlus style={{
  border: "1.5px solid white",
              
               borderRadius:'20px',
               marginRight:'5px',
               display:'flex',
               alignItems:'center'
}} size={25}/> Add New</Link>
                   
                </div>
            </div>
            
   
            
        </div>

        <div
            className="col-lg-6 d-flex flex-lg-row flex-column align-items-lg-center justify-content-end align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">
          
            
                <div className="col-lg px-0">
                <div className="customInput " style={{
                  justifyContent:'start',
                  alignContent:'center',
                  alignItems:'center'
                }} >
  <BsSearch size={20} color='black'/>
  <input style={{
    border:'none',
    background:'transparent',
    padding:'0',
    margin:'0'
  }} type="text"  placeholder="Search"   onChange={(e)=>{setInputText(e.target.value)}}  />
        </div>
                </div>

                <div className="col-lg-4 d-flex justify-content-lg-end">
            <div>
                 
                
            </div>

        </div>
           

        </div>
       </div>

       <Nav variant="tabs" activeKey={activeKey} onSelect={handleSelect} style={{
        border:'none',
        borderBottom:'0.01px solid #cccccc'
       }} >
     
      {
        categories.map((tab,index)=> <Nav.Item key={index.toString()} onClick={()=>{
          
        setActiveKey(tab.id);
       }}>
       <Nav.Link eventKey={tab.id} style={(activeKey === tab.id ?  {
         color:'orange',
            border:'none',
            justifyContent:'end',
            borderBottom:'1px solid orange',
            fontWeight:'600'
       }:{
            color:'gray',
            border:'none',
            justifyContent:'end',
           
       } )} >{tab.categoryName}</Nav.Link>
        </Nav.Item>
       )
      }
     
     
    </Nav>


   
    
    <Row   lg={data ? data.length === 0 ?1 : 4 :1} style={{
       

           
           }}>
          
         { data  ? data.length === 0 ? <Col>
          <div>
           <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
           
            marginTop:'13%'

           
            

           }}>
 <AiOutlineExclamationCircle size={'7%'} color="#C7C7CC" style={{
   marginBottom:'1%'
 }}/>
 <h6 style={{
  color:'#8E8E93',
  fontWeight:'300',
  fontSize:'20px',
  marginBottom:'1%'

 }}>No Items are found</h6>

<button className='customButton'  onClick={()=>{
 navigate('/menu/addMenu')
}}>Add New Item</button>
 
           </div>
           </div>
          </Col>:
            
             data.map((item,index)=>
    
           <Col key={index.toString()} >
          
           
           <StyeledTab>
           <div>

<div className="container">
<Link to={`menudetail/${item.id}`}> 

 <img src={`${API_BASE_URL}/Menu/Photos/${item.foodImage1}`} alt="" /></Link>
<Link to={`editmenu/${item.id}`}> 
<button className="btn">Edit</button>
</Link>
  
</div>
     
         </div>
              
           </StyeledTab>
         
        
           
          <div className='justify-content-between' style={{
           display:'flex',
           paddingLeft:'10px',
           paddingRight:'20px',
           marginTop:'20px',
           
       
          }}>
         
           <h4 style={{
               fontWeight:'500',
               fontSize:'20px'
           }}> {item.name}</h4>
           <h4  style={{
               fontWeight:'700',
               fontSize:'20px'
           }} >Birr {item.price}</h4>
   <button className='blackButton' style={{
    marginBottom:'15px' ,
     
   }} onClick={ async ()=>{
  
        setLoading(true)
   await MenuActionController.deleteMenuAction(item.id);
       window.location.reload(false);
       setLoading(false);
    
    
   }}  ><MdDelete style={{
    marginRight:'10px'
   }} />Delete</button>
          </div>
          <div className=' justify-content-center' style={{
           display:'flex',
          gap:'20px'
       
          }}>
       
                       <div className="rounded-lg mr-2 " style={{
                          
                           color:'black',
                           borderRadius:'10px',
                        
                           alignItems:'center',
                           textAlign:'center',
                           justifyContent:'center',
                           display:'flex',
                           border:'1px solid black',
                           paddingLeft:'5px',
                           paddingRight:'5px',
                           fontSize:'15px'

                          
                           
                          }}>
                          {item.itemName}
                          </div>
                          <div className="rounded-lg mr-2 " style={{
                          
                          color:'black',
                           borderRadius:'10px',
                           width:'200px',
                           alignItems:'center',
                           textAlign:'center',
                           justifyContent:'center',
                           display:'flex',
                           border:'1px solid black',
                           padding:'5px',
                           fontSize:'15px'
                          
                         }}>
                        {item.enoughFor} Lifetime order
                         </div>
       
          </div>
           
           </Col>
           )
        
           
            : 
           
          <Col>
          <div>
           <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
           
            marginTop:'13%'

           
            

           }}>
 <AiOutlineExclamationCircle size={'7%'} color="#C7C7CC" style={{
   marginBottom:'1%'
 }}/>
 <h6 style={{
  color:'#8E8E93',
  fontWeight:'300',
  fontSize:'20px',
  marginBottom:'1%'

 }}>No Items are found</h6>

<button className='customButton'  onClick={()=>{
 navigate('/menu/addMenu')
}}>Add New Item</button>
 
           </div>
           </div>
          </Col>
         }
         
       
       </Row>


    </div>
    
   
    

    
  )
}


const StyeledTab = styled.section`
.container {
  position: relative;
  width: 100%;
}


.container img {
  margin-top:20px;
  width: 100%;
height:200px;
  border-radius:5px
}


.container .btn {
  position: absolute;
  top: 85%;
  left: 75%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  font-size: 16px;
  width:30%;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  
  
}

.container .btn:hover {
  background-color: white;
  color:black;
}`