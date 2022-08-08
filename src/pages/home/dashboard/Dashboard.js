
import {Graph,} from "./Graph"
import { BarGraph } from "./Bar"
import { IoMdNotificationsOutline ,} from "react-icons/io";

import { BsBookmarkDash } from "react-icons/bs";
import { AiOutlineDollar ,AiOutlineArrowDown,AiOutlineArrowUp } from "react-icons/ai";

import { MdOutlinePeopleAlt } from "react-icons/md";
import React , {useState, useEffect} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export default function Dashboard() {
    const orderData =[
        {name:"Pizza",
orderAmount:"12",
imageUrl:""
        },
        {
            name:"Spicy Seasoned sea foods",
            orderAmount:"23",
            imageUrl:""
                    },
    ];

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
      }, []);
  return (  
    <div className="container-fluid px-xl-5 px-4 pt-4 position-relative  " style={{
        backgroundColor:'#FAFAFA'
    }}>
<div class="row  ">
        <div className="col">
           <div style={{ 
            display:'flex',
            justifyContent:'space-between'
           }}>
           <h3 className="font-weight-bolder">Dashboard</h3>
           <IoMdNotificationsOutline color="gray" size={"40"}/>
           </div>
           <p style={{
              color:'gray'
            }}> {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>
           

        </div>

        <div className="dropdown-divider"></div>
        <div class="row " >
        <div class="col-lg-8  px-0 my-2">
         
          <div class="d-flex flex-wrap w-100 col-12 justify-content-between px-0 "  style={{
                    justifyContent:'space-evenly',
                    gap:'20px',
                    
                }}>
               
                <div class="d-flex flex-column col-lg col-md-6  mb-3 mb-lg-0">
                    <div class="w-100 d-flex flex-column p-4 rounded-lg " style={{
                        backgroundColor:'#FECB16',
                        borderRadius:"20px",
                        margin:'10px'
                    }}>
                        <div class="d-flex w-100 justify-content-between align-items-center " ><span
                                class="rounded bg-light px-2 py-1 material-icons-outlined" style={{
                                  
                                }}>
                                <AiOutlineDollar size={19}/>
                            </span>
                         
                            <span style={{
                                color:'green'
                            }}>5%
                                <span 
                                    class="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                        backgroundColor:'rgba(0,128,0,0.1)'
                                    }}>
                                    <AiOutlineArrowUp />
                                </span>
                                <span 
                                    class="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                        backgroundColor:'rgba(255,0,0,0.2)'
                                    }}
                                    >
                                    <AiOutlineArrowDown  />
                                </span>
                                
                               
                            </span>
                        </div>
                      
                        <h2 class="font-weight-bold mt-3">10,233.00</h2>
                       
                        <h6 style={{
                            color:'white'
                        }}>Total Revenue</h6>
                    </div>

                </div>
                <div class="d-flex flex-column col-lg col-md-6  mb-3 mb-lg-0">
                    <div class="w-100 d-flex flex-column bg-black p-4 rounded-lg " style={{
                        backgroundColor:'black',
                        borderRadius:"20px",
                        margin:'10px'
                    }}>
                        <div class="d-flex w-100 justify-content-between align-items-center"><span
                                class="rounded bg-lightPrimary p-2 material-icons-outlined" style={{
                                    backgroundColor:'#FFF0D4'
                                }}>
                                <span class="material-icons-outlined white" style={{
                                    
                                }}>
                                   <BsBookmarkDash color="#FFB572" size={20}/>
                                </span>
                            </span>
                          

                            <span style={{
                                color:'red'
                            }}>5%
                                <span 
                                    class="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                        backgroundColor:'rgba(0,128,0,0.1)'
                                    }}>
                                    <AiOutlineArrowUp />
                                </span>
                                <span 
                                    class="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                        backgroundColor:'rgba(255,0,0,0.2)'
                                    }}
                                    >
                                    <AiOutlineArrowDown  />
                                </span>
                                
                               
                            </span>
                        </div>
                     
                        <h2 class="font-weight-bold mt-3 text-white">12,000.00</h2>
         
                        <h6 class="text-muted" color="gray">Total Dish Ordered</h6>
                    </div>
                </div>
         
                <div class="d-flex flex-column col-lg col-md-6  mb-3 mb-lg-0" style={{
             
                }}>
                    <div class="w-100 d-flex flex-column bg-white p-4 rounded-lg " style={{
                        backgroundColor:'white',
                        borderRadius:"20px",
                        margin:'10px',
                       
                    }}>
                        <div class="d-flex w-100 justify-content-between align-items-center"><span
                                class="rounded p-2 material-icons-outlined" style={{
                                    backgroundColor:'#7B3EFD'
                                }}>
                                <span class="material-icons-outlined text-white">
                                    <MdOutlinePeopleAlt size={20}/>
                                </span>
                            </span>
                 

                            <span style={{
                                color:'green'
                            }}>5%
                                <span 
                                    class="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                        backgroundColor:'rgba(0,128,0,0.1)'
                                    }}>
                                    <AiOutlineArrowUp />
                                </span>
                                <span 
                                    class="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                        backgroundColor:'rgba(255,0,0,0.1)'
                                    }}
                                    >
                                    <AiOutlineArrowDown color="red" />
                                </span>
                                
                               
                            </span>

                        </div>
                       
                        <h2 class="font-weight-bold mt-3 ">1234</h2>
                   
                        <h6 class="text-muted">Total customers</h6>
                    </div>
                </div>
            </div>
           
{/* graph */}
            <div style={{
                backgroundColor:'white',
                padding:'20px',
                borderRadius:'10px',
                marginTop:'10px'
              
            }} >
            <div style={{
                display:'flex',
              justifyContent:'space-between',
         

            }}>
                <div style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    gap:'40px',
                    marginLeft:'10px'
                }}>
                    <div>
                        <h5>34.4K</h5>
                        <p className=" text-muted">Total Orders</p>
                    </div>
                    <div>
                        <h5>34.2K</h5>
                        <p className=" text-muted">Total Revenue</p>
                    </div>
                    <div style={{
                        display:'flex',
                        gap:'10px',
                        marginTop:'10px'

                    }}>
                        <div style={{
                            width:'20px',
                            height:'20px',
                            borderRadius:"50%",
                            backgroundColor: '#7B3EFD',
                          
                            
                        }}></div>
                        <h6>Revenue</h6>
                    </div>
                    <div style={{
                        display:'flex',
                        gap:'10px',
                        marginTop:'10px'

                    }}>
                        <div style={{
                            width:'20px',
                            height:'20px',
                            borderRadius:"50%",
                            backgroundColor: ' #FECB16',
                            
                        }}></div>
                        <h6>Orders</h6>
                    </div>
                </div>
                <div class="border btn right d-flex " style={{
                    height:'40px',
                    justifyContent:'center'
                }}><span><DropdownButton variant='white' className=" " style={{
                    padding:'0',
                    margin:'0'
                }} >
                      
                      <Dropdown.Item  onClick={()=>{
                        
                      }}>Monthly</Dropdown.Item>
                      <Dropdown.Item onClick={()=>{
                      
                      }} >Weekly</Dropdown.Item>
                   
                      
                      </DropdownButton></span> Monthly</div>
            </div>
          
             <Graph/>
            </div>
           


            <div class=" col-12 bg-white mt-3 align-items-start py-3 px-4 rounded-lg">
               
                <h6>Daily Order Summary</h6>
                <div class="d-flex pt-2 pb-2 flex-wrap align-items-center "style={{
                    justifyContent:'space-between'
                }}>
                  
                    <div
                        class="d-flex justify-content-center align-items-center border bg-white px-3 py-2 h-auto rounded mr-lg-4 mr-2 mb-lg-3 mb-3  ">
                        <span class="h3 mr-3 mb-0 gray">10</span>
                        <div style={{
                        color:'gray',
                        fontWeight:"100",
                        paddingLeft:'10px'

                       }}>pending</div>
                        
                    </div>
                   
                    <div
                        class="d-flex justify-content-center align-items-center border bg-white px-3 py-2 rounded mr-lg-4 mr-2 mb-lg-3 mb-3">
                        <span class="h3 mr-3 mb-0">12</span>
                       <div style={{
                        color:'gray',
                        fontWeight:"100",
                        paddingLeft:'10px'

                       }}>processing</div>
                    </div>
                    
                    <div
                        class="d-flex justify-content-center align-items-center border bg-white px-3 py-2 rounded mr-lg-4 mr-2 mb-lg-3 mb-3 ">
                        <span class="h3 mr-3 mb-0">15</span>
                        <div style={{
                        color:'gray',
                        fontWeight:"100",
                        paddingLeft:'10px'

                       }}>cancelled</div>
                        
                    </div>
                    
                    <div
                        class="d-flex justify-content-center align-items-center border bg-white px-3 py-2 rounded mr-lg-4 mb-lg-3 mb-3 ">
                        <span class="h3 mr-3 mb-0">12</span>
                        <div style={{
                        color:'gray',
                        fontWeight:"100",
                        paddingLeft:'10px'

                       }}>completed</div>
                        
                    </div>
                    {/* go to orderlisr */}
                    <div 
                        class="d-flex cursor-pointer ml-3 justify-content-center align-items-center border bg-black text-white px-3 py-2 rounded mr-lg-4 mb-lg-3 mb-3 ">
                        view all
                    </div>

                </div>
            </div>




            
        </div>
        <div class="col-lg-4 mt-2 my-2" style={{
         paddingLeft:'40px',
         paddingRight:'40px',
        }}>
        
    <div style={{ padding:"20px",
     
    backgroundColor:'white',borderRadius:'15px',
            border:"0.5px solid gray"}}>
            <div style={{
            display:'flex',
            justifyContent:'space-between',
            
            
        }}>
        <h6>Customers</h6>
        <div class="btn-outline-dark btn">Monthly</div>
        </div>
     <BarGraph/>   
    </div>
            <div class="w-100 bg-white rounded-lg px-xl-5  px-4 py-4 mt-3 d-flex flex-column " style={{
                backgroundColor:'white',
               
            }}>
                <div class="d-flex justify-content-between align-items-center">
                    <h5>Most Ordered</h5>
                    <div class="btn-outline-dark btn">Monthly</div>
                </div>
                <div class="dropdown-divider pb-3 mt-2"></div>
           
                <div>
                    {orderData.map((order,index)=>
                        <div  class="d-flex mb-3">
                    <h6>#{index+1}</h6>
                    <div class="rounded bg-grayBg mx-3 p-3 menu-image  "
                        >
                    </div>
                    <div class="d-flex flex-column">
                        <h6 class="font-weight-bold">{order["name"]}</h6>
                        <h6 class="medium text-muted">{order.orderAmount}</h6>
                    </div>
                </div>
                    )}
                </div>
                
                <a routerLink="Orders/OrdersList" class="btn btn-outline-dark mx-5 mt-3">View All</a>
            </div>
        </div>


        </div>


        
    </div>
    </div>
  )
}


