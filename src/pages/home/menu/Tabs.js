import { borderBottom, height, padding, textAlign } from '@mui/system';
import React , { useEffect, useState }from 'react'
import { Nav, Container, Col, Row } from 'react-bootstrap';


export default function Tabs() {
    const [inputText, setInputText] = useState();
    function handleClick(){
        console.log("whats up");
    }
    const [activeKey, setActiveKey] = useState(1);
   
    const handleSelect = (eventKey) => setActiveKey(eventKey);

    const tabs =[
        {
            id:1,
            title:'All',
            items :[
                {
                    id:12,
                    name:'piza',
                    imageUrl:''
                }
            ]
            
        },
        {
            id:10,
            title:'Cold Dishes',
            items :[
                {
                    id:12,
                    name:'piza',
                    imageUrl:''
                },
                {
                    id:12,
                    name:'piza',
                    imageUrl:''
                },
                {
                    id:12,
                    name:'piza',
                    imageUrl:''
                },
                {
                    id:12,
                    name:'piza',
                    imageUrl:''
                },
                {
                    id:12,
                    name:'piza',
                    imageUrl:''
                },
                {
                    id:12,
                    name:'piza',
                    imageUrl:''
                },
            ]
            
        }
    ];
  return (
    <div>
        <div class="row w-100 pt-3  ml-0">
        <div class="col-lg-6 d-flex flex-row px-0">
     
            <div class="d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-center align-items-center bg-light border-info border 
                     px-3 py-2 rounded mr-3">

                    <span class="mr-2">12</span>total items
                </div>
            </div>
   
            <div class="d-flex justify-content-center align-items-center">

                <button routerLink="'/Dashboard/Menus/AddNewMenu'"
                    class="btn btn-black px-3 py-2 d-inline-flex justify-content-center align-items-center"><span
                        class="material-icons-outlined mr-2">
                        +
                    </span>Add New</button>
            </div>
        </div>

        <div
            class="col-lg-6 d-flex flex-lg-row flex-column align-items-lg-center justify-content-end align-items-end flex-wrap mr-0  mt-4 px-0 mt-lg-0">
          
            <form formGroup="searchFormGroup">
                <div class="col-lg px-0">
                <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" value={inputText}  />
</div>
                </div>
            </form>

        </div>
       </div>

       <Nav variant="tabs" activeKey={activeKey} onSelect={handleSelect} style={{
        border:'none',
        borderBottom:'0.01px solid #cccccc'
       }} >
     
      {
       tabs.map((tab,index)=> <Nav.Item onClick={()=>{
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
           
       } )} >{tab.title}</Nav.Link>
        </Nav.Item>
       )
      }
     
     
    </Nav>

    
    
    <Row xs={1} md={2}  lg={4} style={{
       

           
           }}>
         {
           tabs[1].items.map((item,index)=><Col >
       
    <div style={
           {
               position:'relative',
           display:'inline-block',
           textAlign:'center',
         marginTop:'50px',
        
           }
          }>
             <img style={{
               width:"100%",
               height:'50%',
               borderRadius:'10px',
               }}  src='https://healthyrecipesblogs.com/wp-content/uploads/2021/12/seafood-mix-1-2021.jpg'/>
               <button style={{
                    position:'absolute',
           bottom:'10px',
           right:'30px',
           width:'100px',
           height:'30px',
           
               }}>Edit</button>
       
          </div>
              
        
           
          <div className='justify-content-between' style={{
           display:'flex',
           paddingLeft:'15px',
           paddingRight:'30px',
           marginTop:'20px',
           
       
          }}>
           <h4 style={{
               fontWeight:'500',
               fontSize:'20px'
           }}> {item.name}</h4>
           <h4  style={{
               fontWeight:'700',
               fontSize:'20px'
           }} >Birr 260</h4>
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
                          Burger
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
                         124 lifetime order
                         </div>
       
          </div>
           
           </Col>)
         }
         
       
       </Row>


    </div>
    
   
    

    
  )
}
