import React, { useEffect, useState } from 'react'

import { AiOutlineArrowLeft } from "react-icons/ai";
import CatagoryImagePicker from '../newMenu/CatagoryImagePicker';


import { GrEdit } from "react-icons/gr";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Col , Row } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import Carousel from 'react-bootstrap/Carousel';
import { API_BASE_URL } from '../../../../services/api-config';

export default function MenuDetail() {
    const [itemDetail ,setItemDetail] = useState();
    const menuController = useSelector((state)=>state.menu.menus);
    let {menuId} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{

        if(menuId){
            menuController.map((item)=>{
             
               if(item.id === menuId){
                   console.log(item)
                 setItemDetail(item);
   
               }{
                  
               }
         })
  
        }
   
    },)
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
      }, []);

  

      const [checked, setChecked] = React.useState(true);

      const handleChange = (event) => {
        setChecked(event.target.checked);
      };
    
  return (
    itemDetail ? 
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div class="row flex justify-content-between">
        <div class="col">
        
            <h3 class="font-weight-bolder"><span   class="material-icons-outlined mr-2   medium p-0"
                   >
                   <button style={{
                    border:'none',
                    backgroundColor:'transparent'
                   }} onClick={()=>{
                     navigate(-1)
                   }}>  <AiOutlineArrowLeft  style={{
               marginRight:'20px',

            }} /></button>
                 
          
                </span>Item - {menuId}</h3>
           
                <p> {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>
        </div>
        <div class="col   ">
          
            <div class=" d-flex w-auto align-items-center px-4   justify-content-end">
                 
                <div className="col-12 d-flex justify-content-end align-items-center px-4">
                 
                    <h6 className="pt-2 mt-1  ">Status Avialable</h6>
                   
                    <Switch   checked={checked}
      onChange={handleChange} />

                </div>
                <div style={{
                    display:"flex"
                }}> <button onClick={()=>{
                      navigate(`/menu/editmenu/${menuId}`);
                }} class="btn btn-black px-4 ml-5 d-flex gap-3"> <span
                            class="material-icons-outlined small mr-2">
                            <GrEdit/>
                        
                        </span>Edit </button></div>
            
            </div>
        </div>
    </div>
    <div class="dropdown-divider"></div>
    <div class="row py-4 ">
    <div class="col-lg-5 mb-lg-0 mb-4">



            <Carousel>
      <Carousel.Item interval={1000}>
      
        <img
          className="d-block w-100"
          src={`${API_BASE_URL}/Menu/Photos/${ itemDetail['foodImage1']  }`} 
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={`${API_BASE_URL}/Menu/Photos/${ itemDetail['foodImage2']  }`} 
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={`${API_BASE_URL}/Menu/Photos/${ itemDetail['foodImage3']  }`} 
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${API_BASE_URL}/Menu/Photos/${ itemDetail['foodImage4']  }`} 
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        </div>
        <div class="col-lg-7 py-3 px-3 ">
        <div class="d-flex " style={{
          gap:'20px'
        }}>
               
                <h3 class="font-weight-bold">{itemDetail['itemName']}</h3>
                 
                <div
                    class="px-4 py-1 ml-4 border  text-black rounded font-weight-bold d-flex justify-content-center align-items-center">
                $ {itemDetail['price']}
                </div>
            </div>
            <p class="py-3 pr-5">{itemDetail['description']} </p>
            <div class="dropdown-divider py-2"></div>
            <Row lg={4}>
  
         <Col><div class=" d-flex flex-row justify-content-evenly align-items-center mr-4 mb-lg-0 mb-3 md-4">
                    <h6 class="mr-2 text-muted">Time </h6>
                    <h6 class="font-weight-bold">{itemDetail['estimatedTime']}</h6>
                </div></Col>  <Col> <div class=" d-flex flex-row justify-content-evenly align-items-center mr-4 mb-lg-0 mb-3">
                    <h6 class="mr-2 text-muted">Enough For </h6>
                    <h6 class="font-weight-bold">{itemDetail['enoughFor']}</h6>
                </div></Col>  <Col> <div class=" d-flex flex-row justify-content-evenly align-items-center mr-4 mb-lg-0 mb-3">
                    <h6 class="mr-2 text-muted">Weight </h6>

                    <h6 class="font-weight-bold">{itemDetail['weight']}</h6></div></Col>  <Col> <div 
                    class=" d-flex flex-row justify-content-evenly align-items-center mr-3 mb-lg-0 mb-3 ">
                    <h6 class="mr-2 text-muted">Calories </h6>
          
                    <h6 class="font-weight-bold">{itemDetail['calories']}</h6>
                </div></Col>
            </Row>
            
           <div class="dropdown-divider mt-4 pb-2"></div>
           <div class="d-flex flex-row justify-content-between col-12 flex-wrap px-0">
               
                <div 
                    class="col-md-6 col-12 flex-column mb-lg-0 mb-4 px-0">
                   
                    <h6 class=" text-muted mb-3">Removable Ingredients</h6>
                 
                    <div class="d-flex flex-wrap">
                       
                        { itemDetail['removableIngredient'].length === 0 ?<div>None</div> : itemDetail['removableIngredient'].map((ingridient)=><div 
                            class="rounded-pill d-inline bg-line text-black font-weight-normal d-flex justify-content-center align-items-center px-3  py-1 mr-2">
                           {ingridient}
                        </div>)
                        
                        }
                    </div>

                </div>
               
                <div class="d-flex col-md-6 col-12 flex-column px-0">
                  
                    <h6 class=" text-muted mb-3">Categories</h6>
                   
                    <div class="d-flex flex-wrap">
                       { itemDetail['category'].length === 0 ? <div>None</div> : itemDetail['category'].map((category)=> <div
                            class="rounded-pill d-inline bg-line text-black font-weight-normal d-flex justify-content-center align-items-center px-3  py-1 mr-2">
                            {category.categoryName}
                        </div>)}
                    </div>

                </div>

            </div>
       </div>
    </div>
</div> :<div>no data</div>
  )
}
