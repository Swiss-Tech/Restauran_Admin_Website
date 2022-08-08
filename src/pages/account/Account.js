import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { MdEdit } from 'react-icons/md'
import Switch from '@mui/material/Switch';
import Carousel from 'react-bootstrap/Carousel';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail ,AiOutlineCalendar} from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
const StyledAccount = styled.section`



.role-type {
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
}

.container {
  position: relative;

}

.AdBtn {
  position: absolute;
  bottom: 15px;
   right: 50px;
}

.container .btn:hover {
  background-color: black;
}`
export default function Account() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
  return (
  
<StyledAccount>
<div class="container-fluid vh-100">
<div class="row justify-content-center align-items-center pt-5">
        <div class="col-lg-5">
            <div class="d-flex  align-items-center ">
            
                <h2 class="font-weight-bolder mr-4"><span role="button"
                        class="mr-4 rounded   p-0">
                        <BsArrowLeft style={{
                    marginRight:'15px'
                }}/>
                    </span>Account</h2>
                <div className=' ' style={{
                    marginLeft:'30px'
                }}>
                    <button  class="btn bg-black text-white  btn-sm py-1 px-4 rounded"><span
                            class="material-icons-round mr-2 small ">
                        
                        <MdEdit style={{
                            marginRight:'10px'
                        }} />
                        </span>Edit</button>
                </div>
            </div>


    
             
        </div>
      
        <div class="col-lg-5 d-flex justify-content-lg-end align-items-center">
    
         
            <h5 class="pt-2 mt-1 mr-2">Restaurant Online</h5>
            <Switch   checked={checked}
      onChange={handleChange} />
           
          
        </div>
    </div>

    <div class="row  justify-content-center  pt-4" style={{
        marginTop:'60px'
    }}>

        <div class="col-lg-6 col-12">

    <div class="bg-inputBg rounded-lg shadow-lg" >
    <Carousel  >
      <Carousel.Item interval={1000}>
      
        <img height={'270px'} 
          className="d-block w-100" style={{
           borderRadius:'20px'
          }}
          src="https://thumbs.dreamstime.com/z/injera-firfir-typical-ethiopian-food-flatbread-fasting-traditional-lunch-teff-beats-potato-dahl-lentils-cuisine-african-plate-farm-160097632.jpg" 
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img height={'270px'}   style={{
           borderRadius:'20px'
          }}
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/z/injera-firfir-typical-ethiopian-food-flatbread-fasting-traditional-lunch-teff-beats-potato-dahl-lentils-cuisine-african-plate-farm-160097632.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img height={'270px'} 
          className="d-block w-100"  style={{
           borderRadius:'20px'
          }}
          src="https://thumbs.dreamstime.com/z/injera-firfir-typical-ethiopian-food-flatbread-fasting-traditional-lunch-teff-beats-potato-dahl-lentils-cuisine-african-plate-farm-160097632.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img height={'270px'}  style={{
           borderRadius:'20px'
          }}
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/z/injera-firfir-typical-ethiopian-food-flatbread-fasting-traditional-lunch-teff-beats-potato-dahl-lentils-cuisine-african-plate-farm-160097632.jpg" 
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
            </div>

            <div class="  py-5  rounded-lg d-flex flex-lg-row flex-column  align-items-center ">


<img class="rounded-circle mb-lg-0 mb-4 bg-primary shadow-lg logo" style={{
    border:'7px solid orange'
}}
    width="150px" height="150px"           src="https://thumbs.dreamstime.com/z/injera-firfir-typical-ethiopian-food-flatbread-fasting-traditional-lunch-teff-beats-potato-dahl-lentils-cuisine-african-plate-farm-160097632.jpg"  />

<div  class="d-flex flex-column " style={{
    marginLeft:'30px',
    marginTop:'30px'
}}>

    <h4 class="font-weight-bold">Deli</h4>
    <p class="text-muted">
    toLowerCasetknfgwenfoerg wergqepargnerjg[qkefera
        toLowerCasetknfgwenfoerg wergqepargnerjg[qkefera
      
      </p>

    <div class="d-flex flex-wrap  justify-content-between " style={{
        marginTop:'20px'
    }}>
      
        <div class="d-flex justify-content-center align-items-center mr-lg-5 mr-0 mb-3 mb-lg-0  " style={{
           gap:'10px' 
        }}><span
                class="material-icons-outlined medium mr-3 ">
                <BsTelephone/>
            </span>0964001822</div>
        
        <div class="d-flex justify-content-center align-items-center mr-lg-5 mr-0 mb-3 mb-lg-0"  style={{
           gap:'10px' 
        }}><span
                class="material-icons-outlined medium mr-2">
                <AiOutlineMail/>
            </span>wbilihatu@gmail.com</div>
     
        <div class="d-flex justify-content-center align-items-center mr-lg-5 mr-0 mb-3 mb-lg-0"  style={{
           gap:'10px' 
        }}><span
                class="material-icons-outlined medium mr-2">
                <IoLocation/>
            </span>Addis Ababa Ethiopia</div>
    </div>
</div>
</div>



<div class="d-flex flex-column px-3">
<div class="d-flex  align-items-center mt-3 mb-2  text-muted">Working days<span
                        class="material-icons-outlined medium " style={{
                        marginLeft:'10px'
                        }}>
                        <AiOutlineCalendar/>
                    </span></div>

                    <div class="d-flex flex-wrap">
                
                    <div class="d-flex flex-wrap mt-3 mr-lg-5 ">
                        <span >
                            <span>
                            Monday
                                 &nbsp;,&nbsp; Tuesday  &nbsp;,&nbsp; Wednesday

                            </span>

                        </span>
                        <span
                            class="bg-success text-white px-3 py-1 rounded mx-3">12:00 Am</span>
                        to
                        <span style={{
                            backgroundColor:"#7B3EFD"
                        }}
                            class="  text-white px-3 py-1 rounded mx-3">12:00 Pm</span>
                    </div>
                </div>
</div>



        </div>


        <div class="col-lg-4 col-12 mt-5 ml-5 " style={{
           
        }}>
        <div
                class="row  bg-background ml-lg-3 ml-2 mr-lg-0 mr-2 mt-lg-0 mt-4 py-4 rounded-lg  px-4 d-flex flex-column ">
                
                <div class="d-flex flex-lg-row flex-column pb-4 ml-lg-3">
                 
                    <div class="pfp rounded-lg mr-4 position-relative">
                        <img class="rounded-lg shadow-lg bg-primary" width="150px" height="150px" style={{
                            borderRadius:'10px'
                        }}
                            src="https://thumbs.dreamstime.com/z/injera-firfir-typical-ethiopian-food-flatbread-fasting-traditional-lunch-teff-beats-potato-dahl-lentils-cuisine-african-plate-farm-160097632.jpg"  alt=""/>
                        <div
                            class="role-type mx-3 bg-black text-white font-weight-bold d-flex justify-content-center align-items-center rounded-pill px-2 py-1">
                            Admin</div>
                    </div>
                    <div class="d-flex flex-column justify-content-center " style={{
                        marginLeft:'20px'
                    }}>
                      
                        <h5 class="font-weight-bold mt-lg-0 mt-3">suz</h5>
              
                       <p>wbilihatu</p>
                        <input type="number" value="0964001922"/ >
                    </div>
                    <div class="d-flex flex-column justify-content-start " style={{
                        marginLeft:'20px'
                    }}>Edit</div>
                </div>
            </div>

            <div class="row d-flex flex-column px-3 py-3   mt-3 ml-lg-3 ml-2 mr-2 mr-lg-0 rounded-lg px-4">
             
                <div class="d-flex justify-content-between align-items-center mb-3 mt-3 px-2">
                    <div class="d-flex  align-items-center   h5 font-weight-bold">Shared Costs</div>
                    <div className=' ' style={{
                    marginLeft:'30px'
                }}>
                    <button  class="btn border text-black  btn-sm py-1 px-4 rounded"><span
                            class="material-icons-round mr-2 small ">
                        
                        <MdEdit style={{
                            marginRight:'10px'
                        }} />
                        </span>Edit</button>
                </div>

                </div>
                <div class="dropdown-divider my-3"></div> 
              
                <div class="w-100 mt-lg-0 mt-3 px-2 table-responsive">
                    <table class="table table-borderless table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                      
                        <tbody>
                            <tr>
                              
                                <td>2</td>
                                <td>potato</td>
                               
                                <td>12</td>
                              
                                <td>
                                    <span  class="material-icons-round mr-3">
                                        delete
                                    </span>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row d-flex flex-column px-3 py-3   mt-3 ml-lg-3 ml-2 mr-2 mr-lg-0 rounded-lg px-4">
              
                <div class="d-flex justify-content-between align-items-center mb-3 mt-3 px-2">
                    <div class="d-flex  align-items-center   h5 font-weight-bold">Shared Costs</div>
                    <div className=' ' style={{
                    marginLeft:'30px'
                }}>
                    <button  class="btn border text-black  btn-sm py-1 px-4 rounded"><span
                            class="material-icons-round mr-2 small ">
                        
                        <MdEdit style={{
                            marginRight:'10px'
                        }} />
                        </span>Edit</button>
                </div>

                </div>
                <div class="dropdown-divider my-3"></div> 
             
                <div class="w-100 mt-lg-0 mt-3 px-2 table-responsive">
                    <table class="table table-borderless table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">'item_name' </th>
                                <th scope="col">'price' </th>
                                <th scope="col">'actions' </th>
                            </tr>
                        </thead>
                      
                        <tbody>
                            <tr >
                               
                                <td>1</td>
                                <td>vat</td>
                                
                                <td>15%</td>
                         
                                <td>
                                    <span class="material-icons-round mr-3">
                                        delete
                                    </span>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>


    </div>
</div>
</StyledAccount>
   
  )
}
