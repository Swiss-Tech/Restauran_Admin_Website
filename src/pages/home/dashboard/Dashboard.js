
import {Graph,} from "./Graph"
import { BarGraph } from "./Bar"
import { IoMdNotificationsOutline ,} from "react-icons/io";

import { BsBookmarkDash } from "react-icons/bs";
import { AiOutlineDollar ,AiOutlineArrowDown,AiOutlineArrowUp } from "react-icons/ai";

import { MdOutlinePeopleAlt } from "react-icons/md";

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
  return (  
    <div className="container-fluid px-xl-5 px-4 pt-5 position-relative  " style={{
       
    }}>
<div class="row">
        <div className="col">
           <div style={{ 
            display:'flex',
            justifyContent:'space-between'
           }}>
           <h3 className="font-weight-bolder">Dashboard</h3>
           <IoMdNotificationsOutline color="gray" size={"40"}/>
           </div>
           <p>12-11-2022</p>
           

        </div>

        <div className="dropdown-divider"></div>
        <div class="row   ">
        <div class="col-lg-8  px-0 my-2">
          {/* statistics card */}
          <div class="d-flex flex-wrap w-100 col-12 justify-content-between px-0 "  style={{
                    justifyContent:'space-evenly',
                    gap:'20px',
                    
                }}>
                {/* <!-- total revenue --> */}
                <div class="d-flex flex-column col-lg col-md-6  mb-3 mb-lg-0">
                    <div class="w-100 d-flex flex-column p-4 rounded-lg " style={{
                        backgroundColor:'#FECB16',
                        borderRadius:"20px",
                        margin:'10px'
                    }}>
                        <div class="d-flex w-100 justify-content-between align-items-center " ><span
                                class="rounded bg-light p-2 material-icons-outlined" style={{
                                    
                                }}>
                                <AiOutlineDollar size={20}/>
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
                     
                        <h2 class="font-weight-bold mt-3 text-white">12,000.00</h2>
         
                        <h6 class="text-muted" color="gray">Total Orders</h6>
                    </div>
                </div>
         
                <div class="d-flex flex-column col-lg col-md-6  mb-3 mb-lg-0" style={{
             
                }}>
                    <div class="w-100 d-flex flex-column bg-white p-4 rounded-lg " style={{
                        backgroundColor:'white',
                        borderRadius:"20px",
                        margin:'10px',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1), 0 3px 10px 0 rgba(0,0,0,0.1)'
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
            <div >
            <div style={{
                display:'flex',
              justifyContent:'space-between'

            }}>
                <div style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    gap:'40px'
                }}>
                    <div>
                        <h3>34K</h3>
                        <h6>Total Orders</h6>
                    </div>
                    <div>
                        <h3>34K</h3>
                        <h6>Total Revenue</h6>
                    </div>
                    <div style={{
                        display:'flex',
                        gap:'10px'

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
                        gap:'10px'

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
                <div class="btn-outline-dark btn right">Monthly</div>
            </div>
          
             <Graph/>
            </div>
           


            <div class=" col-12 bg-white mt-3 align-items-start py-3 mt-2 px-4 rounded-lg">
               
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
           
        }}>
        
    <div style={{ padding:"20px",
    marginLeft:'50px',
            border:"0.5px solid gray"}}><div style={{
            display:'flex',
            justifyContent:'space-between',
            
        }}>
        <h6>Customers</h6>
        <div class="btn-outline-dark btn">Monthly</div>
        </div>
     <BarGraph/>   
    </div>
            <div class="w-100 bg-white rounded-lg px-xl-5 py-xl-5 px-4 py-4 mt-3 d-flex flex-column " style={{
                backgroundColor:'white'
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


