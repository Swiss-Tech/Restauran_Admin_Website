
import React , { useEffect, useState }from 'react'
import { Nav, Container, Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { GrAdd } from "react-icons/gr";
import {BsSearch} from  "react-icons/bs";
import { TbAdjustmentsHorizontal } from 'react-icons/tb';

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { API_BASE_URL } from '../../../services/api-config';
export default function Tabs() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJSRVNUX0lEIjoiMDhkYTZlMmYtMTY3YS00NmUyLTg5ZTYtOWVjNGViMjFjMzEwIiwiX2F0XyI6IlN1cGVyX0FkbWluIiwiZXhwIjoxNjYwMDQzNzc0fQ.SjDbIsph4XJiSWhDIHvB9u31yf9gu2U7x8AOVLQvJQ5N4pjHchb7hGFqAsvLZfDI2Ngl9avKt4-7zekrTMPbfzDONPhwrWw1Z-0vdCZH4SVOB0LAhvoDy0xt-XKFAqkIerp4sIOj7avh-WPrtT_sMn_wg4JRgNL69Qni-HrJw7lXZiviYBkVDtfyRc8JsZ9pFrM2Q1elvV2tTxnTwHid1PGGDMVQYkRqxCZ4CQRN7YMR-3WQ3CINwDSr-7u4Uy3UgX8eLpIzWjw7AZsAQscOcqzGYJ9KJGdjw0R5Fd9-A3JwSa6FStFWr1jX1CEbupiVJs2orrx6TmNvee9_PH2o4w");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
    const  menuController = useSelector((state)=>state.menu);
    const categoryController = useSelector((state)=>state.category);
    const [inputText, setInputText] = useState();
    
    const [activeKey, setActiveKey] = useState('1');
   
    const handleSelect = (eventKey) => setActiveKey(eventKey);
    const fetchedItems = menuController.menus;
    const [data, setData] = useState();
    const [imageUrl , setImageUrl] = useState();
    const [filtered , setFilter] = useState(
     []
    )
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;                
      console.log(base64data);
    }
    



    useEffect(() => {
      

      if(activeKey){
       
        filterData();
        
        
        
      }
    
     
     }, [activeKey] ,[filtered]);

    
     
       function filterData(){
     
  
        if(activeKey === '1'){
          setData(fetchedItems);
        }
        
        else{
          setData(null);

          fetchedItems.map((item)=>{
            
            if(item.category.some(category => category.id === activeKey)){
            
              
    if(filtered.some(isExist=>isExist.id === item.id)){
     
    } 
   
    else{
      filtered.push(item);
      
    }
    setData(filtered);
            }
            

          })

        }
    
       }
      const categories = categoryController.categories;


      const [img, setImg] = useState();
     

      const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
        return imageObjectURL;
      };
     
    
useEffect(()=>{
  if(inputText){
     setData(null);
     serachFilter();
  }
  else{
    filterData();
  }
})

function serachFilter()
{
   setFilter([]);
 fetchedItems.map((item)=>{
  if(item.itemName.toLowerCase() === inputText.toLowerCase()){

    if(filtered.some(isExist=>isExist.id === item.id)){
     
    } {
      filtered.push(item);
    }
  
    setData(filtered);
  }
  
  
 })

}
 
     return (
    <div>
        <div class="row w-100 pt-3  ml-0">
        <div class="col-lg-6 d-flex flex-row px-0">
     
            <div class="d-flex justify-content-center align-items-center" >
                <div class="d-flex justify-content-center align-items-center 
                     px-3 py-2 rounded mr-3" style={{
              border: "1px solid black",
              backgroundColor:'white' ,
              marginLeft:"10px"
            }}>

                    <span class="mr-2 ">{menuController.menus.length}</span>Total Items
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center" >
                <div class="d-flex justify-content-center align-items-center 
                     px-3 py-2 rounded mr-3" style={{
              border: "1px solid black",
              backgroundColor:"black",
              marginLeft:"15px"
            
            }}> 
            <div style={{
               border: "1.5px solid white",
               width:'20px',
               height:'20px',
               borderRadius:'20px',
               marginRight:'5px'
            }}><GrAdd 
            color="white" size={10}
            /></div>
<Link to="addMenu" style={{
  textDecoration:'none',
  color:"white"
}}>Add New</Link>
                   
                </div>
            </div>
            
   
            
        </div>

        <div
            class="col-lg-6 d-flex flex-lg-row flex-column align-items-lg-center justify-content-end align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">
          
            
                <div class="col-lg px-0">
                <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><BsSearch/></span>
  <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"  onChange={(e)=>{setInputText(e.target.value)}}  />
        </div>
                </div>

                <div class="col-lg-4 d-flex justify-content-lg-end">
            <div>
                 
                <button 
                    class="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        class="material-icons-outlined medium mr-2">
                      <TbAdjustmentsHorizontal size={25} style={{
                        padding:'2px'
                      }}/>  
                    </span> Filter Menu</button>
            </div>

        </div>
           

        </div>
       </div>

       <Nav variant="tabs" activeKey={activeKey} onSelect={handleSelect} style={{
        border:'none',
        borderBottom:'0.01px solid #cccccc'
       }} >
     
      {
        categories.map((tab,index)=> <Nav.Item onClick={()=>{
          
        setActiveKey(tab.id);
       }}>
       <Nav.Link eventKey={tab.id} style={(activeKey === tab.id ?  {
         color:'orange',
            border:'none',
            justifyContent:'end',
            borderBottom:'1px solid orange'
       }:{
            color:'gray',
            border:'none',
            justifyContent:'end',
           
       } )} >{tab.categoryName}</Nav.Link>
        </Nav.Item>
       )
      }
     
     
    </Nav>


   
    
    <Row   lg={4} style={{
       

           
           }}>
         { data ?
           data.map((item,index)=>
    
           <Col >
          
           
           <StyeledTab>
           <div>

<div class="container">
<Link to={`menudetail/${item.id}`}> 

 <img onClick={()=>{
    
  }} src={`${API_BASE_URL}/Menu/Photos/${item.foodImage1}`} alt="" /></Link>
<Link to={`editmenu/${item.id}`}> 
<button class="btn">Edit</button>
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
          </div>
          <div className=' justify-content-center' style={{
           display:'flex',
          gap:'20px'
       
          }}>
       
                       <div class="rounded-lg mr-2 " style={{
                          
                           color:'black',
                           borderRadius:'10px',
                           width:'100px',
                           alignItems:'center',
                           textAlign:'center',
                           justifyContent:'center',
                           display:'flex',
                           border:'1px solid black',
                           padding:'5px',
                           fontSize:'15px'
                          
                           
                          }}>
                          {item.itemName}
                          </div>
                          <div class="rounded-lg mr-2 " style={{
                          
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
           ) :<div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
           }}>
 <AiOutlineExclamationCircle size={100} color="gray"/>
 <h1>No Items are found In This Category</h1>
 <button style={{
  color:'orange'
 }}>Add</button>
           </div>
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
  height: auto;
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