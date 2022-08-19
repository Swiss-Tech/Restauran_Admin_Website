import React, { useState , useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { MdEdit } from 'react-icons/md'
import Switch from '@mui/material/Switch';
import Carousel from 'react-bootstrap/Carousel';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail ,AiOutlineCalendar} from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { MdDelete } from 'react-icons/md';
import SharedCost from '../../models/SharedCost';
import { accountActionCreators, orderActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../reusable-components/Loader';
import apiCall from '../../ApiCall';
import { API_BASE_URL } from '../../services/api-config';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { addWorkingDays } from '../../services/account.service';

const StyledAccount = styled.section`

input[type="checkbox"]:not(:checked), 
input[type="checkbox"]:checked {
  position: absolute;
  left: -9999%;
}
input[type="checkbox"] + label {
    width: 50px;
    align-items:center ;
    justify-content:center ;
    text-align:center;
    border-radius:10px ;
    background-color: #f8f8f8;
    color:black;
    font-weight:700 ;
    border:none;
  /* display: inline-block; */
  padding: 10px;
  cursor: pointer;
 color: black;
  margin-bottom: 10px;
 
}

input[type="checkbox"]:checked + label {
 
 color: white;
 background-color:${({theme})=>theme.colors.primary};
}

width:100%;

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
    const dispatch = useDispatch();
    const accountController = useSelector((state)=>state.account);
    const AccountActionController = bindActionCreators(accountActionCreators, dispatch);
    const adminController = useSelector((state)=>state.account.adminInformation);

    const [editSharedCostByValue , setEditSharedCostByValue] = useState(false);
    const [editSharedCostByPercent , setEditSharedCostByPercent] = useState(false);
    const [sharedCosts, setSharedCosts] = useState([]); 
    const [checked, setChecked] = useState(true);
    const [itemName,setItemName] = useState();
    const [itemValue, setItemValue] = useState();
    const [dataSource, setDataSource] = useState();
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
      const navigate = useNavigate();
      const handleSharedCost =( sharedCost)=>{
  
  

        if(sharedCost.isPercent){
             setSharedCosts([...sharedCosts , new SharedCost(sharedCost.itemName, sharedCost.isPercent, sharedCost.value)]);
        }
        else{
            setSharedCosts([...sharedCosts , new SharedCost(sharedCost.itemName, sharedCost.isPercent, sharedCost.value)]);
        }
      }


      useEffect(()=>{
        apiCall(dispatch);
        if(accountController.restaurantInformation){
    
            setDataSource(accountController.restaurantInformation);
        }{
          AccountActionController.getRestaurantInformationAction();
          AccountActionController.getRestaurantInformationAction()
        }
      },[]);

      const [isLoading , setLoading] = useState(false);


  const firstName = adminController['firstName']
  const lastName = adminController['lastname']
  const phoneNumber  = adminController['phoneNumber'];
  const email = adminController['email'];

//  useEffect(()=>{
//   apiCall(dispatch);
//  },)

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const [workingDays, setWorkingDays] = useState({
  days :[]
});





const handleWorkingDaysChange = (e) => {
  // Destructuring

  const { value, checked } = e.target;
  const { days } = workingDays;
  // Case 1 : The user checks the box
  if (checked) {
    setWorkingDays({
      days: [...days, e.target.id],
    
    });

  
  }
  // Case 2  : The user unchecks the box
  else {
    setWorkingDays({
      days: days.filter((e) => e !== value),
    });
  }
 
};




  return (
   
 <StyledAccount >
 { isLoading ? <Loader/> : dataSource ? dataSource.length === 0 ? <Loader/> : adminController ?
<div class="container-fluid ">
<div class="row justify-content-center align-items-center pt-5">
        <div class="col-lg-5">
            <div class="d-flex  align-items-center ">
            
                <h2 class="font-weight-bolder mr-4"><span role="button"
                        class="mr-4 rounded   p-0">
                        <BsArrowLeft style={{
                    marginRight:'15px'

                }} onClick={()=>{
                  navigate(-1)
                }} />
                    </span>Account</h2>
                <div className=' ' style={{
                    marginLeft:'30px'
                }}>
                    <button onClick={()=>{
                        navigate("/edit/restaurantinformation")
                    }}  class="btn bg-black text-white  btn-sm py-1 px-4 rounded"><span
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
          src={API_BASE_URL+"/Auth/Photos/"+ dataSource['image1URL']}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img height={'270px'}   style={{
           borderRadius:'20px'
          }}
          className="d-block w-100"
          src={API_BASE_URL+"/Auth/Photos/"+ dataSource['image2URL']}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img height={'270px'} 
          className="d-block w-100"  style={{
           borderRadius:'20px'
          }}
          src={API_BASE_URL+"/Auth/Photos/"+ dataSource['image3URL']}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img height={'270px'}  style={{
           borderRadius:'20px'
          }}
          className="d-block w-100"
          src={API_BASE_URL+"/Auth/Photos/"+ dataSource['image4URL']}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
            </div>

            <div class="  py-5  rounded-lg d-flex flex-lg-row flex-column  align-items-center ">


<img class="rounded-circle mb-lg-0 mb-4 bg-primary shadow-lg logo" style={{
    border:'7px solid orange'
}}
    width="150px" height="150px"       src={API_BASE_URL+"/Auth/Photos/"+ dataSource['restaurantLogoPhotoURL']}     />

<div  class="d-flex flex-column " style={{
    marginLeft:'30px',
    marginTop:'30px'
}}>

    <h4 class="font-weight-bold">{dataSource['restaurantName']}</h4>
    <p class="text-muted">
    {dataSource['restaurantShortDescription']}
       
      
      </p>

    <div class="d-flex flex-wrap  justify-content-between " style={{
        marginTop:'20px',
        gap:'20px'
    }}>
      
        <div class="d-flex justify-content-center align-items-center mr-lg-5 mr-0 mb-3 mb-lg-0  " style={{
           gap:'10px' 
        }}><span
                class="material-icons-outlined medium mr-3 ">
                <BsTelephone/>
            </span>{dataSource['restaurantPhoneNumber']} </div>
        
        <div class="d-flex justify-content-center align-items-center mr-lg-5 mr-0 mb-3 mb-lg-0"  style={{
           gap:'10px' 
        }}><span
                class="material-icons-outlined medium mr-2">
                <AiOutlineMail/>
            </span>{dataSource['restaurantEmail']} </div>
     
        <div class="d-flex justify-content-center align-items-center mr-lg-5 mr-0 mb-3 mb-lg-0"  style={{
           gap:'10px' 
        }}><span
                class="material-icons-outlined medium mr-2">
                <IoLocation/>
            </span>{dataSource['restaurantLocation']}</div>
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
                            { dataSource['workingDays'] ?  dataSource['workingDays'].length ===0 ? "No working days":  
                            
                            

                            dataSource['workingDays'].map((day)=><div style={{
                              display:'flex',
                              justifyContent:'space-between',
                              padding:'10px'
                            }}>
                            {day.day}
                                 &nbsp; <button onClick={ async  ()=>{
                                  setLoading(true);
                                await AccountActionController.deleteDaysAction(day.id)
                                await AccountActionController.getRestaurantInformationAction();
                                await  AccountActionController.getRestaurantInformationAction()
                               await  apiCall(dispatch);
                                window.location.reload(false)
                                  setLoading(false)
                              
                                 }} className='blackButton'>Delete </button> 

                            </div>  ) :""
                            
                            }

                        </span>
                        
                       
                      

                     
                    </div>

                    <div  class="d-flex flex-wrap mt-3 mr-lg-5 "> <h6 className=' text-muted'>Working Hour</h6><span
                            class=" bg-warning text-white px-3 py-1 rounded mx-3" style={{
                              height:'40px'
                            }}>  {dataSource['workingHour'] ?dataSource['workingHour']:""}</span> </div>

                    
                </div>


                <div className="col-lg-6  mb-5">
          
          <h6>Add Dates</h6>
     
          <form> 
            <div className="row" style={{ display: "flex" , 
            
            marginBottom:'5px'}}>
              <ul style={{
                padding:'0',
                margin:'0',
                clear:'both'
              }} >
                {days.map((element) => (
                  
                  <li key={element} style={{
                    listStyleType:'none',
                    padding:'10px',
                    float:'left'
                  }}>

                 
                    <input
                      type="checkbox"
                      id={element}
                      name="workingDay"
                     
                      onChange={handleWorkingDaysChange}
                    
              
                    />
                    <label htmlFor={element} onClick={()=>{

                    
                
                    }}>{element[0]}</label>
                  </li>
                ))}
              </ul>
              <div className='blackButton' style={{
                width:'40%'
              }} onClick={async()=>{
                           setLoading(true);
               await AccountActionController.addWorkingDaysAction(workingDays.days)
                await AccountActionController.getRestaurantInformationAction();
                await  AccountActionController.getRestaurantInformationAction()
                setLoading(false)
                                window.location.reload(false)
                             
               
              }}>Add Days</div>
            </div>

       
        
         
        </form>
      </div>
</div>



        </div>


        <div class="col-lg-4 col-12 mt-5 ml-5 " style={{
           
        }}>
        <div
                class="row  bg-background ml-lg-3 ml-2 mr-lg-0 mr-2 mt-lg-0 mt-4 py-4 rounded-lg  px-4 d-flex flex-column ">
                
                <div class="d-flex flex-lg-row flex-column pb-4 ml-lg-3">
                 
                    <div class="pfp rounded-lg mr-4 position-relative" style={{
                      width:'150px',
                      height:'150px',
                      color:'orange',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      alignContent:'center',
                      fontSize:'50px',
                      fontWeight:'900',
                      backgroundColor:'#FECB16',
                      color:'white',
                      borderRadius:'5px'
                    }}>
                       
                         { firstName ? firstName[0]:""}{ lastName ? lastName[0]:""}
                        <div
                            class="role-type mx-3 bg-black text-white font-weight-bold d-flex justify-content-center align-items-center rounded-pill px-2 py-1" style={{
                              fontSize:'20px',
                              fontWeight:'300'
                            }}>
                            Admin</div>
                    </div>
                    <div class="d-flex flex-column justify-content-center " style={{
                        marginLeft:'20px'
                    }}>
                      
                        <h5 class="font-weight-bold mt-lg-0 mt-3">{firstName ? firstName +" ":"" } {lastName ? lastName :""}</h5>
              
                       <p>{email ? email:""}</p>
                        <input type="number" value={ phoneNumber ? phoneNumber :"" } / >
                    </div>
                    <div class="d-flex flex-column justify-content-start "  onClick={()=>{
                        navigate('/edit/admin')
                    }}  style={{
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
                     <button onClick={()=>{
                        setEditSharedCostByValue(!editSharedCostByValue);
                     }} class="btn border text-black  btn-sm py-1 px-4 rounded"><span
                            class="material-icons-round mr-2 small ">
                        
                        <IoMdAddCircleOutline size={20} style={{
                            marginRight:'10px'
                        }} />
                        </span>Add</button>
                </div>

                </div>
                <div class="dropdown-divider my-3"></div> 
             
               <div style={(editSharedCostByValue)?{}:{
                display:'none'
               }}>
               <div style={{
                    display:'flex',
                   justifyContent:'center',
                   gap:'15px',
                    marginBottom:"5px",
                    
                }}> 
                <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label className="font-weight-normal h6 " htmlFor="item-name">
                          Item name
                        </label>
                        <input
                          formcontrolname="itemControlValue"
                          required
                          type="text"
                          className="form-control"
                          name=""
                          id="itemName"
                          placeholder=""
                          autoFocus
                       
                         onChange={(e)=> setItemName(e.target.value) } 

                        />

                        
                      </div>
                     
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label className="font-weight-normal h6 " htmlFor="cost">
                          Price
                        </label>
                        <input
                          formcontrolname="priceControlValue"
                          required
                          type="number"
                          className="form-control"
                          name=""
                          id="itemCost"
                          
                         onChange={(e)=> setItemValue(e.target.value) } 
                        />

                        

                        
                      </div>
                    </div>
                    

                    
                    </div>
                    <button onClick={async ()=>{

                          if(itemName && itemValue ){
                            setLoading(true)
                 await AccountActionController.addCostSharing({isPercent:false ,itemName:itemName , value:itemValue});
                 await AccountActionController.getRestaurantInformationAction()
                 await AccountActionController.getRestaurantInformationAction()
                  setLoading(false)
                       
            
                 
            
                 }
                 setItemName();
                  setItemValue();
                    }} className="addButton  align-self-center ">Add </button>

               </div>
              
                <div class="w-100 mt-lg-0 mt-3 px-2 table-responsive">
                    <table class="table table-borderless table-sm">
                        <thead>
                            <tr>
                               
                                <th scope="col">Item Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                      
                        <tbody>
                           {
                            dataSource['sharedCosts'] ? dataSource['sharedCosts'].map((item,index)=> {
                                if(item['isPercent']===false) 
                              {
                                return   <tr>
                              
                           
                                <td>{item['itemName']}</td>
                               
                                <td>{item['value']}</td>
                              
                                <td className='btn' onClick={ async ()=>{
                                    setLoading(true)
                               await AccountActionController.deteleCostSharing(item.id);
                             
                           window.location.reload(false);
                           setLoading(false)
                                }}>
                                    <span  class="material-icons-round ">
                                    <MdDelete size={25}/>
                                    </span>
  
                                </td>
                            </tr>
                              }
                            }) :""
                           }
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
                  <button onClick={   ()=>{
                         
                        setEditSharedCostByPercent(!editSharedCostByPercent);
                         
                     }} class="btn border text-black  btn-sm py-1 px-4 rounded"><span
                            class="material-icons-round mr-2 small ">
                        
                        <IoMdAddCircleOutline  size={20} style={{
                            marginRight:'10px'
                        }} />
                        </span>Add</button>
                </div>

                </div>
                <div class="dropdown-divider my-3"></div> 
                <div style={(editSharedCostByPercent)?{}:{
                display:'none'
               }}>
               <div style={{
                    display:'flex',
                   justifyContent:'center',
                   gap:'15px',
                    marginBottom:"5px",
                    
                }}> 
                <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label className="font-weight-normal h6 " htmlFor="item-name">
                          Item name
                        </label>
                        <input
                          formcontrolname="itemControlValue"
                          required
                          type="text"
                          className="form-control"
                          name=""
                          id="itemName"
                          placeholder=""
                          autoFocus
                       
                          onChange={(e)=> setItemName(e.target.value) } 

                        />

                        
                      </div>
                     
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label className="font-weight-normal h6 " htmlFor="cost">
                          Price
                        </label>
                        <input
                          formcontrolname="priceControlValue"
                          required
                          type="number"
                          className="form-control"
                          name=""
                          id="itemCost"
                          
                           onChange={(e)=> setItemValue(e.target.value) } 
                        />

                        

                        
                      </div>
                    </div>
                    

                    
                    </div>
                    <button onClick={async()=>{
                          if(itemName && itemValue ){
                                  setLoading(true)
                           await AccountActionController.addCostSharing({isPercent:true ,itemName:itemName , value:itemValue});
                           
                           setLoading(false)
                           window.location.reload(false);
            
                 }
                 setItemName();
                  setItemValue();
                    }} className="addButton  align-self-center ">Add </button>

               </div>
             
                <div class="w-100 mt-lg-0 mt-3 px-2 table-responsive">
                    <table class="table table-borderless table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Item Name </th>
                                <th scope="col">Value % </th>
                                <th scope="col">Action </th>
                            </tr>
                        </thead>
                      
                        <tbody>
                       { dataSource['sharedCosts'] ? dataSource['sharedCosts'].map((item,index)=> {
                                if(item['isPercent']===true) 
                              {
                                return   <tr>
                              
                              
                                <td>{item['itemName']}</td>
                               
                                <td>{item['value']}</td>
                              
                                <td className='btn' onClick={ async ()=>{
                                    setLoading(true)
                               await AccountActionController.deteleCostSharing(item.id);
                             
                           window.location.reload(false);
                           setLoading(false)
                                }}>
                                    <span  class="material-icons-round ">
                                    <MdDelete size={25}/>
                                    </span>
  
                                </td>
                            </tr>
                              }}):""}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>


    </div>
</div>  :<Loader/> :<Loader/>

}
</StyledAccount> 
 
  )
}
