import React , {useState , useEffect} from 'react'
import CatagoryImagePicker ,{MenuImagePicker} from '../newMenu/CatagoryImagePicker';
import { useDispatch, useSelector } from 'react-redux'
import Combobox from "react-widgets/Combobox";
// import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
import { Link , useNavigate } from 'react-router-dom';
import { categoryActionCreators } from '../../../../actions';
import { menuActionCreators } from '../../../../actions';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router';
import {API_BASE_URL } from "../../../../services/api-config"
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import MenuItem from '../../../../models/MenuItem';
import Loader from '../../../reusable-components/Loader';

export default function EditMenu() { 
     const dispatch = useDispatch();
    const MenuActionController = bindActionCreators(menuActionCreators, dispatch);
    const categoryController = useSelector((state)=>state.category);
    
    const [itemDetail ,setItemDetail] = useState();
    const menuController = useSelector((state)=>state.menu.menus);
    const menuMessageController = useSelector((state)=>state.menu.responseMessage);
    const menuStatusController = useSelector((state)=>state.menu.sucess);
  
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
    const [status , setStatus] = useState(true);

    const [foodImage1, setFoodImage1] = useState();
    const [foodImage2, setFoodImage2] = useState();
    const [foodImage3, setFoodImage3] = useState();
    const [foodImage4, setFoodImage4] = useState();
    const [foodImage1File , setFoodImage1File ] = useState();
    const [foodImage2File , setFoodImage2File ] = useState();
    const [foodImage3File , setFoodImage3File ] = useState();
    const [foodImage4File , setFoodImage4File ] = useState();
    const [isLoading , setLoading] = useState(false);
  


    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setStatus(event.target.checked);
    };
  


const [dateState, setDateState] = useState(new Date());
const [firstTime , setFirstTime] = useState(true);
useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);


   console.log(menuMessageController);
useEffect(  ()=>{
    
    if(itemDetail){
        if (firstTime)  {
        setIntialValue()
        setFirstTime(false);
       }
    }
},)


function setIntialValue (){
    setItemName(itemDetail['itemName'])
    setPrice(itemDetail['price'])
    setCalories(itemDetail['calories'])
    setWeight(itemDetail['weight'])
    setDescription(itemDetail['description'])
    setEnoughFor(itemDetail['enoughFor'])
    setEstimatedTime(itemDetail['estimatedTime'])
  
   
     
   
    if(itemDetail['removableIngredient'].length===0){
 
    }
    else{

        itemDetail['removableIngredient'].map((value)=>{
           // setRemovableIngredients([...removable_ingredients , value]);
           removable_ingredients.push(value);
        })
       
    }
    if(itemDetail['category'].length === 0){

    } 
    else{
        itemDetail['category'].map((value)=>{
           // setCategories([...categories , value]);
            categories.push(value);
        })
    }

    

  
}
  
useEffect(()=>{
    if(menuStatusController === true){
    console.log(menuStatusController)
    MenuActionController.clearMenuMessageAction()
    }
    if(menuStatusController === false){
       navigate('/')
       MenuActionController.clearMenuMessageAction()
    }

},[menuStatusController])



  return (
    
    <div>
     
   {
    isLoading ? <Loader/> : 
        
    itemDetail ?  <div className="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div className="row">
        <div className="col-lg-8">

          
            <h3 className="font-weight-bolder">Edit Menu</h3>
            
            <p> {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>

        
        </div>
        <div className="col-lg-4 d-flex justify-content-lg-end">
            <div> <button  onClick={()=>{
                navigate('/catagories')
            }}
                    className="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        className="material-icons-outlined medium mr-2">
                        <TbAdjustmentsHorizontal size={25} style={{
                        padding:'2px'
                      }}/>
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
                                placeholder="" defaultValue={itemName} onChange={(e)=>setItemName(e.target.value)}/>
                            
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
                                placeholder=""  defaultValue={calories} onChange={(e)=>setCalories(e.target.value)} />
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
                                placeholder="" defaultValue={price} onChange={(e)=> setPrice(e.target.value)}/>
                    
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
                            <input   type="number" className="form-control" name="weight"
                                id="weight" placeholder="" defaultValue={weight} onChange={(e) => setWeight(e.target.value)}/>
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
                            <textarea type="text" rows="3" className="form-control" name="description" defaultValue={description}
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
                            <input min="1"  type="number" className="form-control" name="enough_for" defaultValue={enough_for }
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
                            <input  type="text" className="form-control" name="estimatedTime" defaultValue={ estimated_preparation_time }
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
                            <input  type="text" className="form-control" name="categories" id="categories"
                                placeholder=""/> 
                                 <div className="dropdown-divider mt-2 mb-3"></div>

                                 <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select native defaultValue="" id="grouped-native-select" onChange={(e)=>{
             setCategories([...categories , e.target.value]);
        }}>
    
        {
            categoryController.categories.map((category)=> <option  value={category}>{category.categoryName}</option>)
        }
        </Select>
      </FormControl>
      <div className="d-flex flex-wrap">
                            {
                                categories.map((category , index)=><div 
                                className="rounded-pill bg-placeholder text-black font-weight-normal d-inline-flex justify-content-center align-items-center pl-3 pr-2 py-1 mr-2 mb-2">
                                {category.categoryName}<span 
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
               
                <div className="col-6 d-flex flex-column  justify-content-center ">
                    <h6 className="font-weight-bold">Add images</h6>
                </div>
             
            <div className="row">
          
                
                <CatagoryImagePicker   handleClick={setFoodImage1} handleSetFIle={setFoodImage1File}
              imageUrl={foodImage1}
              id={"restaurantImage1"} apiImage ={ itemDetail['foodImage1']}/>

              <CatagoryImagePicker   handleClick={setFoodImage2} handleSetFIle={setFoodImage2File}
              imageUrl={foodImage2}
              id={"restaurantImage2"}  apiImage ={ itemDetail['foodImage2']}/>
              <CatagoryImagePicker   handleClick={setFoodImage3} handleSetFIle={setFoodImage3File}
              imageUrl={foodImage3}
              id={"restaurantImage3"} apiImage ={ itemDetail['foodImage3']} />
              <CatagoryImagePicker   handleClick={setFoodImage4}  handleSetFIle={setFoodImage4File}
              imageUrl={foodImage4}
              id={"restaurantImage4"} apiImage ={ itemDetail['foodImage4']} />
                
                
                </div>


                <div className="row px-5 py-3  justify-content-center align-items-center">
                <div className="col-10 dropdown-divider  "></div>
                <div className="col-12 d-flex justify-content-between align-items-center px-4">
                 
                    <h6 className="pt-2 mt-1 mr-2">Status Avialable</h6>
                   
                    <Switch   checked={status}
      onChange={handleChange} />

                </div>
                <div className="col-10 dropdown-divider"></div>
            </div>

            <div className="row  py-3 justify-content-center align-items-center mb-lg-0 mb-5">
                <button  onClick={ async ()=>{
                        console.log(itemName)
        //            setLoading(true)
        //    await MenuActionController.updateMenuAction(new MenuItem(menuId , itemName, price, calories, weight,description,enough_for,estimated_preparation_time,removable_ingredients,categories,foodImage1File,foodImage2File,foodImage3File,foodImage4File,checked));
        //      setLoading(false);
                }} type="button" className="btn btn-black " style={{
                    backgroundColor:'black',
                    color:'white',
                    width:'40%',
                    
                }}>
                    <span  >Save and Update</span>
                  
                        
                   

                </button>

               
            </div>

   
   
   
   
                
            </div>
        </div>
    </div>
    </div> :<div></div>
   
    }

    
   
        
        </div>
  )
}
