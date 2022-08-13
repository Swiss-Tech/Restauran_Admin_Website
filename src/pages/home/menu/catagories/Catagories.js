import React , {useEffect, useState}from 'react'
import Catagory , {AccordionExampleNested} from './catagory-template/Catagory'
import { useSelector } from 'react-redux'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { categoryActionCreators } from '../../../../actions';
import POSTCATEGORY from "../../../../models/PostCategory"
import Category from '../../../../models/Category';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Loader from '../../../reusable-components/Loader';

const StyedCategories = styled.section`
 width:100%;
 `
 	
 ;
export default function Catagories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CategoryActionControllers = bindActionCreators(categoryActionCreators, dispatch)
  const categoryController = useSelector((state)=>state.category.categories);
  const categoryMessageontroller = useSelector((state)=>state.category.responseMessage);
  const categoryStatuseontroller = useSelector((state)=>state.category.sucess);
  
  const [categoryName , setCategoryName] = useState();
  const [parentCategory , setParentCategory] = useState();
  const [isParentCategory , setIsParentCategory] = useState();
  const [id ,setId] = useState()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open , setOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setIsParentCategory(event.target.checked);
  };

  


  const [isEdit , setIsEdit] = useState(false);
  var [editableCategory , setEditable] = useState();
   useEffect(()=>{
   
    if(isEdit){
     

      setId(editableCategory.id)
    setCategoryName(editableCategory.categoryName)
    setParentCategory(editableCategory.parentCategory)
    setIsParentCategory(editableCategory.isParentCategory)
    }
   },[isEdit])

const [dateState, setDateState] = useState(new Date());
const [firstTime , setFirstTime] = useState(true);
useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const [isLoading , setLoading] = useState(false);


   useEffect(  ()=>{
     if(categoryStatuseontroller) {
   
      CategoryActionControllers.getAllCatagoryAction();
  
        CategoryActionControllers.clearCategoryMessageAction()
        navigate(0)
    } 
    if(categoryStatuseontroller === false){
      
      CategoryActionControllers.getAllCatagoryAction();
  
      CategoryActionControllers.clearCategoryMessageAction()
      navigate(0)
    }
   })

  return (
    <StyedCategories>
   { isLoading ? <Loader/> : 
   
   <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">

<div class="row">
        <div class="col">
            
            <h3 class="font-weight-bolder">Catagories</h3>
            <p style={{
              color:'gray'
            }}> {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>
        </div>

      </div>
    <div class="dropdown-divider"></div>
    <div class="row pt-3">
    <div class="col-lg-7 bg-white px-5 py-5 mx-lg-0 mx-3 rounded-lg">
         
      <Catagory setEditable ={setEditable} setIsEdit={setIsEdit} handleDelete={CategoryActionControllers.deleteCategoryAction} handleLoading ={ setLoading }/>


     </div>

     <div class="col-lg-5 ">
     <form class="needs-validation" novalidate >
                              <div
                    class="d-flex flex-column bg-white px-5 py-5 mx-lg-0 mb-lg-0 mb-5  rounded-lg ml-lg-5 mt-lg-0 mt-3">
                                        <h5 class="font-weight-bold mb-4">{ isEdit ?'Edit Category':'Add Categories'}</h5>
                                        
                        <div class="form-group">
                            <label class=" h6 " style={{
                              fontWeight:'300'
                            }} for="category-name">Category Name 
                           </label>
                           <input  type="text" class="form-control" formControlName="categoryName"
                            name="" defaultValue={categoryName} onChange={(e)=>setCategoryName(e.target.value)}  />
                           
                           

                          <div class="form-control-feedback text-danger" style={(categoryName ) ?{
    display:'none'
                          }:{
                           
                          }}
                            >
                            Please Add Parent  Category
                          </div>
                       
                           <div class="form-control-feedback text-success" style={(categoryName)?{}:{display:'none'}}>
                              Looks Good
                        </div>
                    </div>
                    <div class="form-group">
                            <label class=" h6 " for="category-name" style={{
                              fontWeight:'300'
                            }} >Parent Category 
                           </label>
                  

  

     <div className='customInput' style={{
      justifyContent:'end',
      color:isParentCategory ?'gray':'black'
      }}>
   <DropdownButton
 

  className="but"
 
 as='div' title="Categories" variant='Secondary'
 >
 
  {categoryController.map((category)=> category.id !=='1' && <Dropdown.Item eventKey="1" style={{
  
 }} onClick={()=>{
   
 
    setParentCategory(category.id)
  


 
 }}>{category.categoryName}</Dropdown.Item>)}
  
 
  
  
 </DropdownButton>
     
     </div>
    

                     
                          <div class="form-control-feedback text-danger" style={(parentCategory)?{
                            display:'none'
                          }: isParentCategory ?{display:'none'}:{}}
                            >
                            Please Select Parent Category 
                          </div>
                       
                           <div class="form-control-feedback text-success" style={(parentCategory)?{
                       
                          }:{     display:'none'}} >
                              Looks Good
                        </div>
                    </div>

                    <div style={{
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <div>Is Parent Category</div>   <Switch    checked={isParentCategory} 
      onChange={handleChange} />
                    </div>
                    <div   onClick={ async ()=>{

                    
                      if(isEdit){
                        setLoading(true)
                    await CategoryActionControllers.updateCategoryAction(new Category(id, categoryName, isParentCategory, parentCategory ))
                     setLoading(false)
                     
                      }
                      else{
                        setLoading(true)
                      await  CategoryActionControllers.addCategoryAction(new POSTCATEGORY(categoryName,isParentCategory, parentCategory))
                        setLoading(false)
                      }
    
                    }} className='customButton btn' style={{
                      width:'200px',
                      fontSize:'15px',
                       display:'flex',
                       justifyContent:'center',
                       alignContent:'center',
                       alignItems:'center'
                    }}>{ isEdit ?'Update Category' :'Add Category'  }</div>

                    
                    </div>
     </form>
     </div>
    </div>
    </div> }
    </StyedCategories>
  )
}
