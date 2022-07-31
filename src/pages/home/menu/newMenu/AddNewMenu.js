import React , {useState , useEffect} from 'react'
import {MenuImagePicker} from './CatagoryImagePicker'
import { useSelector } from 'react-redux'
import Combobox from "react-widgets/Combobox";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
import { IoImageOutline } from "react-icons/io5";
import Form from 'react-bootstrap/Form';
import { style } from '@mui/system';
import { MdKeyboardArrowDown } from 'react-icons/md';
export default function AddNewMenu() {
    const categoryController = useSelector((state)=>state.category);
    const [image1, setImage1]=useState()
    const [itemName , setItemName] = useState();
    const [price , setPrice] = useState();
    const [calories, setCalories] = useState();
    const [weight , setWeight] = useState();
    const [description , setDescription] = useState();
    const [enough_for , setEnoughFor] = useState();
    const [estimated_preparation_time, setEstimatedTime] = useState();
    const [removable_ingredients , setRemovableIngredients] = useState([]);
    const [ingredients , setIngredients] = useState();
    const [ categories , setCategories] = useState([]);
    const [status , setStatus] = useState();
    const [foodImage1, setFoodImage1] = useState();
    const [foodImage2, setFoodImage2] = useState();
    const [foodImage3, setFoodImage3] = useState();
    const [foodImage4, setFoodImage4] = useState();


    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  

    const [selectedFile, setSelectedFile] = useState();
   
    const [preview, setPreview] = useState();
    const [imgList , setImageList] = useState([]);
    const [imgController, setController] = useState(1);
   
    
  
    useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
  
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
  
      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);
    const onSelectFile = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined);
        return;
      }
  
      setSelectedFile(e.target.files[0]);
    };

    useEffect(()=>{
        if(preview){
           
            if(imgController===1){
                setFoodImage1(preview);
                setController(2);
                setPreview(null)
            }
            if(imgController === 2){
                setFoodImage2(preview);
                setController(3);
                setPreview(null)
            }
            if(imgController === 3){
                setFoodImage3(preview);
                setController(4);
                setPreview(null)
            }
            if(imgController === 4){
                setFoodImage4(preview);
                setController(1);
                setPreview(null)
            }

        

           
        }
    } ,)
    const [isDisplay, setDisplay] = useState(false);
console.log(imgList)
  return (
    <div className="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div className="row">
        <div className="col-lg-8">
          
            <h3 className="font-weight-bolder">Add Menu</h3>
            <p>12-12-2112</p>

        
        </div>
        <div className="col-lg-4 d-flex justify-content-lg-end">
            <div> <button 
                    className="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        className="material-icons-outlined medium mr-2">
                        
                    </span>Manage Catagory</button></div>
                   


        </div>
    </div>
    <div className="dropdown-divider"></div>

    <div className="row pt-3">

        <div className="col-lg-7 bg-white px-lg-5 px-4 py-5 mx-lg-0 mx-2 rounded">
           
                <div className='row'>
                <div className="col-lg-6">
                      
                        <div className="form-group">
                            <label className="font-weight-normal h6 " htmlFor="item-name">Item Name</label>
                            <input type="text" className="form-control"  id="item-name"
                                placeholder="" onChange={(e)=>setItemName(e.target.value)}/>
                            
                            <div className="text-danger" style={(itemName) ? {
                                display:'none'
                            }:{}}
                               
                                >
                                Item name is required {itemName}
                            </div>
                          
                            <div className="form-control-feedback text-success" style={(itemName) ? {
                               
                            }:{ display:'none'}} >
                                Looks Good
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="font-weight-normal h6 " htmlFor="calories">Calories</label>
                            <input min={0}  type="number" className="form-control" name="calories" id="calories"
                                placeholder="" onChange={(e)=>setCalories(e.target.value)}/>
                                  <div className="text-danger" style={(calories) ? {
                                display:'none'
                            }:{}}
                               
                                >
                                Calories is required
                            </div>
                          
                            <div className="form-control-feedback text-success" style={(calories) ? {
                               
                            }:{ display:'none'}} >
                                Looks Good
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        
                        <div className="form-group">
                            <label className="font-weight-normal h6 " htmlFor="price">Price</label>
                            <input min={1} type="number" className="form-control" name="price" id="price"
                                placeholder="" onChange={(e)=> setPrice(e.target.value)}/>
                    
                            <div className="form-control-feedback text-danger" style={(price) ? {
                                display:'none'
                            }:{}}
                               >
                                Item price is required
                            </div>
           
                            <div className="form-control-feedback text-success" style={(price) ? {
                            
                            }:{    display:'none'}} >
                                Looks Good
                            </div>
                        </div>

                        
                        <div className="form-group">
                            <label className="font-weight-normal h6 " htmlFor="weight">Weight <span
                                    className="text-muted small">(gram)</span> </label>
                            <input min="1"  type="number" className="form-control" name="weight"
                                id="weight" placeholder="" onChange={(e) => setWeight(e.target.value)}/>
                                <div className="text-danger" style={(weight) ? {
                                display:'none'
                            }:{}}
                               
                                >
                                Weight is required 
                            </div>
                          
                            <div className="form-control-feedback text-success" style={(weight) ? {
                               
                            }:{ display:'none'}} >
                                Looks Good
                            </div>
                        </div>

                    </div>

                    <div className="col-12">
                      
                        <div className="form-group">
                            <label className="font-weight-normal h6 " htmlFor="description">Description</label>
                            <textarea type="text" rows="3" className="form-control" name="description"
                                id="description" placeholder="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
                         
                            <div className="form-control-feedback text-danger" style={(description) ?{
                                display:'none'
                            }:{}}
                               >
                                description is required
                            </div>
                         
                            <div className="form-control-feedback text-success" style={(description) ?{
                               
                            }:{ display:'none'}}>
                                Looks Good
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-6">
                    <div className="form-group">
                            <label className="font-weight-normal h6 " htmlFor="weight">Enough for</label>
                            <input min="1"  type="number" className="form-control" name="enough_for"
                                id="enough_for" placeholder="" onChange={(e) => setEnoughFor(e.target.value)}/>
                                   <div className="text-danger" style={(enough_for) ? {
                                display:'none'
                            }:{}}
                               
                                >
                                Enough for is required 
                            </div>
                          
                            <div className="form-control-feedback text-success" style={(enough_for) ? {
                               
                            }:{ display:'none'}} >
                                Looks Good
                            </div>
                        </div>
                       
                      
                        
                       
                       
                        <div className="form-group">
                            <label className="font-weight-normal h6 " htmlFor="removable_ingredients">Removable Ingredients
                                 </label>
                            <div className="d-flex">
                        
                                <input type="text" name="removableIngredient"
                                    placeholder="" onChange={(e)=>setIngredients(e.target.value)} />
                       
                                <button  onClick={()=>{
                                    
                                  
                                }}
                                    ><span className="material-icons-outlined medium m-0 p-0" onClick={()=>{
                                        setRemovableIngredients([...removable_ingredients , ingredients]);
                                    }}>
                                        Add
                                    </span></button>
                            </div>
                        </div>
                  
                        <div className="dropdown-divider mt-2 mb-3"></div>
                     
                        <div className="d-flex flex-wrap">
                            {
                                removable_ingredients.map((ingredient , index)=><div 
                                className="rounded-pill bg-placeholder text-black font-weight-normal d-inline-flex justify-content-center align-items-center pl-3 pr-2 py-1 mr-2 mb-2">
                                {ingredient}<span 
                                    className="material-icons medium ml-2 btn p-0 m-0">
                                    <button onClick={()=>{
                                        setRemovableIngredients((removable_ingredients) => removable_ingredients.filter((_, i) => i !== index))
                                        // removable_ingredients.pop(ingredient);
                                    }}>x</button>
                                </span></div>)
                            }

                        </div>
                    </div>

                    <div className="col-lg-6 mt-lg-0 mt-5">
                    
                        <div className="form-group">
                            <label className="font-weight-normal h6 "
                                htmlFor="estimated_preparation_time">Estmated Pereparation </label>
                            <input  type="text" className="form-control" name="estimatedTime"
                                id="estimated_preparation_time" placeholder="" onChange={(e)=> setEstimatedTime(e.target.value) }/>
                                <div className="text-danger" style={(estimated_preparation_time) ? {
                                display:'none'
                            }:{}}
                               
                                >
                                Estmated Pereparation Time is required 
                            </div>
                          
                            <div className="form-control-feedback text-success" style={(estimated_preparation_time) ? {
                               
                            }:{ display:'none'}} >
                                Looks Good
                            </div>
                        </div>

  

                       
                        
                         <div className="form-group">
                            <label className="font-weight-normal h6 " htmlFor="categories">Categories</label>
                            <div style={
   {     display:'flex',
   flexDirection:'column',
   justifyContent:'start'
   }

      }>
        <div  className ="customInput" style={{ display:'flex',
       justifyContent:'space-between'
        }} onClick={()=>{
           setDisplay(!isDisplay);
        }}> Categories <MdKeyboardArrowDown/></div>

<div className="dropdown-divider mt-2 mb-3 "></div>
       <div  style={(isDisplay)?{
        display:'flex',
        flexDirection:'column',
        justifySelf:'start',
        alignContent:'start',
        alignItems:'start',
       border:'1px solid gray',
       gap:'10px'
       }:{
        display:'none'
       }}>
       {categoryController.categories.map((category)=> category.id==1 ?<div></div> : <button className='buttonHover' style={{
            border:'none',
            backgroundColor:'transparent'
        }} onClick={()=>{
              if(categories.some((cate)=> cate===category)){
                setDisplay(false)
            }
            else{
                setCategories([...categories , category]);
                setDisplay(false)
            }

        }}> {category.categoryName}</button>)}
       </div>
      </div>

                                
                                 

                               
                       

      
      
        
      
      <div className="d-flex flex-wrap">
                            {
                                categories.map((category , index)=><div 
                                className="rounded-pill bg-placeholder text-black font-weight-normal d-inline-flex justify-content-center align-items-center pl-3 pr-2 py-1 mr-2 mb-2">
                                {category.categoryName} <span 
                                    className="material-icons medium ml-2 btn p-0 m-0">
                                    <button onClick={()=>{
                                        setCategories((categories) => categories.filter((_, i) => i !== index))
                                        // removable_ingredients.pop(ingredient);
                                    }}>x</button>
                                </span></div>)
                            }

                        </div>
                        

                         

                        </div>

                    </div>
                </div>
            
        </div>

        <div className="col-lg-5 px-lg-5 px-3 mt-lg-0 mt-2">
        <div className="dropdown-divider d-lg-none d-block mb-3"></div>
        <div className="row px-lg-5 px-3 mb-3">
               
                <div className="col-6 d-flex flex-row  justify-content-around ">
                    <h6 className="font-weight-bold">Add images</h6>
                    <label
                className="btn "
                onChange={onSelectFile}
                htmlFor={'id'}
              >
              
                <input name="" type="file" id='id' hidden />
                Add
              </label>
                </div>
                
             
            <div className="row">
              
             
            

              
                
                 {

                 }
                <MenuImagePicker   handleClick={setFoodImage1}
              imageUrl={foodImage1} imgController={()=>{setController(1)}}
              id={"restaurantImage1"} />
              <MenuImagePicker   handleClick={setFoodImage2} imgController={()=>{setController(2)}}
              imageUrl={ foodImage2}
              id={"restaurantImage2"} />
               <MenuImagePicker   handleClick={setFoodImage3} imgController={()=>{setController(3)}}
              imageUrl={ foodImage3}
              id={"restaurantImage3"} />
               <MenuImagePicker   handleClick={setFoodImage4} imgController={()=>{setController(4)}}
              imageUrl={ foodImage4}
              id={"restaurantImage4"} />

                 


              
                
                
                </div>


                <div className="row px-5 py-3  justify-content-center align-items-center">
                <div className="col-10 dropdown-divider  "></div>
                <div className="col-12 d-flex justify-content-between align-items-center px-4">
                 
                    <h6 className="pt-2 mt-1 mr-2">Status Avialable</h6>
                   
                    <Switch   checked={checked}
      onChange={handleChange} />

                </div>
                <div className="col-10 dropdown-divider"></div>
            </div>

            <div className="row px-lg-4 py-3 justify-content-center align-items-center mb-lg-0 mb-5">
                <button  type="button" className="btn btn-black col-lg-4 col-5 py-2  mr-2 d-inline">
                    <span  >save and add</span>
                  
                        {/* <div className="spinner-border text-white" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> */}
                   

                </button>

               
            </div>

   
   
   
   
                
            </div>
        </div>
    </div>
    </div>
  )
}
