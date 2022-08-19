
import {Graph,} from "./Graph"
import { BarGraph } from "./Bar"
import { BsBookmarkDash } from "react-icons/bs";
import { AiOutlineDollar ,AiOutlineArrowDown,AiOutlineArrowUp } from "react-icons/ai";

import { MdOutlinePeopleAlt } from "react-icons/md";
import React , {useState, useEffect} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { parse } from "path-browserify";
import Loader from "../../reusable-components/Loader";
import { bindActionCreators } from "redux";
import { accountActionCreators, dashboardActionCreators } from "../../../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import apiCall from "../../../ApiCall";
import { MdLogout } from "react-icons/md";
import { RiLogoutCircleFill ,RiLogoutCircleRLine} from "react-icons/ri";
import {logout_function} from "../../../services/auth.service";
import TransitionAlerts from "../../reusable-components/Alert";
const StyledDashboard = styled.section`
.graphTitle{
    display:flex;
    flex-direction:row;
                    justify-content:space-evenly;
                    gap:40px;
                    margin-left:10px;
}

    @media (max-width:450px){
        .graphTitle{
            dispaly:flex;
            gap:40px;
            flex-direction :column;
        }
    }

`
export default function Dashboard() {
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const DashboardActionController = bindActionCreators(dashboardActionCreators, dispatch);
    const AccountActionController = bindActionCreators(accountActionCreators, dispatch);
    const [dataSource, setDataSource] = useState();
//     const orderData =[
//         {name:"Pizza",
// orderAmount:"12",
// imageUrl:""
//         },
//         {
//             name:"Spicy Seasoned sea foods",
//             orderAmount:"23",
//             imageUrl:""
//                     },
//     ];

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
      }, []);

 const dashController = useSelector((state)=>state.dashboard);



 
  useEffect(()=>{
    apiCall(dispatch);
    if(dashController.dashboardData){

        setDataSource(dashController.dashboardData);
    }{
      DashboardActionController.getDashboardData();
    }
  },[]);
 

  
  return (  
  dataSource ?  <StyledDashboard>
  <TransitionAlerts open={dashController.responseMessage!== null} message ={dashController.responseMessage}   />
  <div  className="container-fluid px-lg-5 px-2 pt-5 position-relative" style={{
      backgroundColor:'#FAFAFA'
  }}>
<div className="row  ">
<div className="col">
      
<div style={{ 
            display:'flex',
            justifyContent:'space-between'
           }}>
           <h3 className="font-weight-bolder">Dashboard</h3>
           <div className="btn" onClick={()=>{
            
          logout_function();
            
            window.location.reload(false);
            navigate('/')
            DashboardActionController.getDashboardData();
            AccountActionController.clearRestaurantMessageAction();
            
           }}><RiLogoutCircleRLine  size={"30"}/></div>
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
      <div className="row " >
      <div className="col-lg-8  px-0 my-2">
      <Row sm={1} lg={3} md={1} xs={1} >
      <Col lg={4} xs={8} sm={2} md={9}> <div className="d-flex flex-column col-lg   mb-3 mb-lg-0">
                  <div className="w-100 d-flex flex-column p-4 rounded-lg " style={{
                      backgroundColor:'#FECB16',
                      borderRadius:"20px",
                      margin:'10px'
                  }}>
                      <div className="d-flex w-100 justify-content-between align-items-center " ><span
                              className="rounded bg-light px-2 py-1 material-icons-outlined" style={{
                                
                              }}>
                              <AiOutlineDollar size={19}/>
                          </span>
                       
                          {/* <span style={{
                              color:'green'
                          }}>0%
                              <span 
                                  className="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                      backgroundColor:'rgba(0,128,0,0.1)'
                                  }}>
                                  <AiOutlineArrowUp />
                              </span>
                              <span 
                                  className="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                      backgroundColor:'rgba(255,0,0,0.2)'
                                  }}
                                  >
                                  <AiOutlineArrowDown  />
                              </span>
                              
                             
                          </span> */}
                      </div>
                    
                      <h2 className="font-weight-bold mt-3">{ dataSource['totalRevenue'] ? parseFloat(dataSource['totalRevenue']).toFixed(2) : parseFloat(0).toFixed(2)}</h2>
                     
                      <h6 style={{
                          color:'white'
                      }}>Total Revenue</h6>
                  </div>

              </div></Col>
      <Col lg={4} xs={8} sm={2} md={9}><div classs="d-flex flex-column col-lg  mb-3 mb-lg-0">
                  <div className="w-100 d-flex flex-column bg-black p-4 rounded-lg " style={{
                      backgroundColor:'black',
                      borderRadius:"20px",
                      margin:'10px'
                  }}>
                      <div className="d-flex w-100 justify-content-between align-items-center"><span
                              className="rounded bg-lightPrimary p-2 material-icons-outlined" style={{
                                  backgroundColor:'#FFF0D4'
                              }}>
                              <span className="material-icons-outlined white" style={{
                                  
                              }}>
                                 <BsBookmarkDash color="#FFB572" size={20}/>
                              </span>
                          </span>
                        

                          {/* <span style={{
                              color:'red'
                          }}>0%
                              <span 
                                  className="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                      backgroundColor:'rgba(0,128,0,0.1)'
                                  }}>
                                  <AiOutlineArrowUp />
                              </span>
                              <span 
                                  className="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                      backgroundColor:'rgba(255,0,0,0.2)'
                                  }}
                                  >
                                  <AiOutlineArrowDown  />
                              </span>
                              
                             
                          </span> */}
                      </div>
                   
                      <h2 className="font-weight-bold mt-3 text-white">{ dataSource['totalDishOrdered'] ? dataSource['totalDishOrdered']:0 }</h2>
       
                      <h6 className="text-muted" color="gray">Total Dish Ordered</h6>
                  </div>
              </div></Col>
      <Col lg={4} xs={8} sm={2} md={9} ><div className="d-flex flex-column col-lg   mb-3 mb-lg-0" style={{
           
          }}>
              <div className="w-100 d-flex flex-column bg-white p-4 rounded-lg " style={{
                  backgroundColor:'white',
                  borderRadius:"20px",
                  margin:'10px',
                 
              }}>
                  <div className="d-flex w-100 justify-content-between align-items-center"><span
                          className="rounded p-2 material-icons-outlined" style={{
                              backgroundColor:'#7B3EFD'
                          }}>
                          <span className="material-icons-outlined text-white">
                              <MdOutlinePeopleAlt size={20}/>
                          </span>
                      </span>
           

                      {/* <span style={{
                          color:'green'
                      }}>0%
                          <span 
                              className="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                  backgroundColor:'rgba(0,128,0,0.1)'
                              }}>
                              <AiOutlineArrowUp />
                          </span>
                          <span 
                              className="material-icons-outlined small rounded-circle p-1 bg-lightSuccess ml-1" style={{
                                  backgroundColor:'rgba(255,0,0,0.1)'
                              }}
                              >
                              <AiOutlineArrowDown color="red" />
                          </span>
                          
                         
                      </span> */}

                  </div>
                 
                  <h2 className="font-weight-bold mt-3 ">{dataSource['totalCustomers'] ? dataSource['totalCustomers'] :0} </h2>
             
                  <h6 className="text-muted">Total customers</h6>
              </div>
          </div></Col>
    </Row>
       
         
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
              <div className="graphTitle" style={{
                 
              }}>
                  <div>
                      <h5>{dataSource['totalOrdersQty']}</h5>
                      <p className=" text-muted">Total Orders</p>
                  </div>
                  <div>
                      <h5>{ dataSource['totalRevenue'] }</h5>
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
              <div className="border btn right d-flex " style={{
                  height:'40px',
                  justifyContent:'center'
              }}><span>
              {/* <DropdownButton title="" variant='white' className=" " style={{
                  padding:'0',
                  margin:'0',
                  
              }} > 
                    
                    <Dropdown.Item  onClick={()=>{
                      
                    }}>Monthly</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{
                    
                    }} >Weekly</Dropdown.Item>
                 
                    
                    </DropdownButton> */}
                    
                    </span> Monthly</div>
          </div>
        
           <Graph/>
          </div>
         


          <div className=" col-12 bg-white mt-3 align-items-start py-3 px-4 rounded-lg">
             
              <h6>Daily Order Summary</h6>
              <div className="d-flex pt-2 pb-2 flex-wrap align-items-center "style={{
                  justifyContent:'space-between'
              }}>
                
                  <div
                      className="d-flex justify-content-center align-items-center border bg-white px-3 py-2 h-auto rounded mr-lg-4 mr-2 mb-lg-3 mb-3  ">
                      <span className="h3 mr-3 mb-0 gray">{dataSource['totalPending']?dataSource['totalPending']:0}</span>
                      <div style={{
                      color:'gray',
                      fontWeight:"100",
                      paddingLeft:'10px',

                     }}>Pending</div>
                      
                  </div>
                 
                  <div
                      className="d-flex justify-content-center align-items-center border bg-white px-3 py-2 rounded mr-lg-4 mr-2 mb-lg-3 mb-3">
                      <span className="h3 mr-3 mb-0">{ dataSource['totalProcessing']?dataSource['totalProcessing']:0}</span>
                     <div style={{
                      color:'gray',
                      fontWeight:"100",
                      paddingLeft:'10px'

                     }}>Processing</div>
                  </div>
                  
                  <div
                      className="d-flex justify-content-center align-items-center border bg-white px-3 py-2 rounded mr-lg-4 mr-2 mb-lg-3 mb-3 ">
                      <span className="h3 mr-3 mb-0">{dataSource['totalCancelled'] ? dataSource['totalCancelled']:0 }</span>
                      <div style={{
                      color:'gray',
                      fontWeight:"100",
                      paddingLeft:'10px'

                     }}>Cancelled</div>
                      
                  </div>
                  
                  <div
                      className="d-flex justify-content-center align-items-center border bg-white px-3 py-2 rounded mr-lg-4 mb-lg-3 mb-3 ">
                      <span className="h3 mr-3 mb-0">{dataSource['totalCompleted']?dataSource['totalCompleted']:0}</span>
                      <div style={{
                      color:'gray',
                      fontWeight:"100",
                      paddingLeft:'10px'

                     }}>Completed</div>
                      
                  </div>
                  {/* go to orderlisr */}
                  <div  onClick={()=>{
                    navigate('/order')
                  }}
                      className="d-flex cursor-pointer ml-3 justify-content-center align-items-center border bg-black text-white px-3 py-2 rounded mr-lg-4 mb-lg-3 mb-3 ">
                      view all
                  </div>

              </div>
          </div>




          
      </div>
      <div className="col-lg-4 mt-2 my-2" style={{
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
      <div className="btn-outline-dark btn">Monthly</div>
      </div>
   <BarGraph/>   
  </div>
          {/* <div className="w-100 bg-white rounded-lg px-xl-5  px-4 py-4 mt-3 d-flex flex-column " style={{
              backgroundColor:'white',
             
          }}>
              <div className="d-flex justify-content-between align-items-center">
                  <h5>Most Ordered</h5>
                  <div className="btn-outline-dark btn">Monthly</div>
              </div>
              <div className="dropdown-divider pb-3 mt-2"></div>
         
              <div>
                  {orderData.map((order,index)=>
                      <div key={ index.toString() }  className="d-flex mb-3">
                  <h6>#{index+1}</h6>
                  <div className="rounded bg-grayBg mx-3 p-3 menu-image  "
                      >
                  </div>
                  <div className="d-flex flex-column">
                      <h6 className="font-weight-bold">{order["name"]}</h6>
                      <h6 className="medium text-muted">{order.orderAmount}</h6>
                  </div>
              </div>
                  )}
              </div>
              
              <a  className="btn btn-outline-dark mx-5 mt-3">View All</a>
          </div> */}
      </div>


      </div>


      
  </div>
  </div>
  </StyledDashboard> : <Loader/>
  )
}


