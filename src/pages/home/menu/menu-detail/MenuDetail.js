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
    <div className="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div className="row flex justify-content-between">
        <div className="col">
        
            <h3 className="font-weight-bolder"><span   className="material-icons-outlined mr-2   medium p-0"
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
           
                <p style={{
                  color:'gray'
                }}>  {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>
        </div>
        <div className="col   ">
          
            <div className=" d-flex w-auto align-items-start px-4   justify-content-end">
                 
                <div className="col-6 d-flex justify-content-end align-items-center px-4">
                 
                    <h6 className="pt-2 mt-1  ">Status Avialable</h6>
                   
                    <Switch   checked={checked}
      onChange={handleChange} />

                </div>

   
                 <button onClick={()=>{
                      navigate(`/menu/editmenu/${menuId}`);
                }} className="blackButton"> 
                            <GrEdit />
                        
                      Edit </button>
            
            </div>
        </div>
    </div>
    <div className="dropdown-divider"></div>
    <div className="row py-4 ">
    <div className="col-lg-5 mb-lg-0 mb-4">



            <Carousel >
      <Carousel.Item interval={1000}>
      
        <img height={'400px'} 
          className="d-block w-100" style={{
           
          }}
          src={`${API_BASE_URL}/Menu/Photos/${ itemDetail['foodImage1']  }`} 
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img height={'400px'} 
          className="d-block w-100"
          src={`${API_BASE_URL}/Menu/Photos/${ itemDetail['foodImage2']  }`} 
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img height={'400px'} 
          className="d-block w-100"
          src={`${API_BASE_URL}/Menu/Photos/${ itemDetail['foodImage3']  }`} 
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img height={'400px'} 
          className="d-block w-100"
          src={`${API_BASE_URL}/Menu/Photos/${ itemDetail['foodImage4']  }`} 
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        </div>
        <div className="col-lg-7 py-3 px-3 ">
        <div className="d-flex " style={{
          gap:'20px'
        }}>
               
                <h3 className="font-weight-bold">{itemDetail['itemName']}</h3>
                 
                <div
                    className="px-4 py-1 ml-4 border  text-black rounded font-weight-bold d-flex justify-content-center align-items-center">
                $ {itemDetail['price']}
                </div>
            </div>
            <p className="py-3 pr-5">{itemDetail['description']} </p>
            <div className="dropdown-divider py-2"></div>
            <Row lg={4}>
  
         <Col><div className=" d-flex flex-row justify-content-evenly align-items-center mr-4 mb-lg-0 mb-3 md-4">
                    <h6 className="mr-2 text-muted">Time </h6>
                    <h6 className="font-weight-bold">{itemDetail['estimatedTime']}</h6>
                </div></Col>  <Col> <div className=" d-flex flex-row justify-content-evenly align-items-center mr-4 mb-lg-0 mb-3">
                    <h6 className="mr-2 text-muted">Enough For </h6>
                    <h6 className="font-weight-bold">{itemDetail['enoughFor']}</h6>
                </div></Col>  <Col> <div className=" d-flex flex-row justify-content-evenly align-items-center mr-4 mb-lg-0 mb-3">
                    <h6 className="mr-2 text-muted">Weight </h6>

                    <h6 className="font-weight-bold">{itemDetail['weight']}</h6></div></Col>  <Col> <div 
                    className=" d-flex flex-row justify-content-evenly align-items-center mr-3 mb-lg-0 mb-3 ">
                    <h6 className="mr-2 text-muted">Calories </h6>
          
                    <h6 className="font-weight-bold">{itemDetail['calories']}</h6>
                </div></Col>
            </Row>
            
           <div className="dropdown-divider mt-4 pb-2"></div>
           <div className="d-flex flex-row justify-content-between col-12 flex-wrap px-0">
               
                <div 
                    className="col-md-6 col-12 flex-column mb-lg-0 mb-4 px-0">
                   
                    <h6 className=" text-muted mb-3">Removable Ingredients</h6>
                 
                    <div className="d-flex flex-wrap">
                       
                        { itemDetail['removableIngredient'].length === 0 ?<div>None</div> : itemDetail['removableIngredient'].map((ingridient)=><div 
                            className="rounded-pill d-inline bg-line text-black font-weight-normal d-flex justify-content-center align-items-center px-3  py-1 mr-2">
                           {ingridient}
                        </div>)
                        
                        }
                    </div>

                </div>
               
                <div className="d-flex col-md-6 col-12 flex-column px-0">
                  
                    <h6 className=" text-muted mb-3">Categories</h6>
                   
                    <div className="d-flex flex-wrap">
                       { itemDetail['category'].length === 0 ? <div>None</div> : itemDetail['category'].map((category)=> <div
                            className="rounded-pill d-inline bg-line text-black font-weight-normal d-flex justify-content-center align-items-center px-3  py-1 mr-2">
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
