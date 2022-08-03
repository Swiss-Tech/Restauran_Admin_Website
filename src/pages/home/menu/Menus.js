import React , {useEffect, useState} from 'react'
import Tabs from './Tabs';
import { getAllCategory } from '../../../services/category.services';
import { getAllMenuItem } from '../../../services/menu.services';
import MenuItem ,{Menu} from '../../../models/MenuItem';
 import { getallmenues } from '../../../actions/menu';
 import { menuActionCreators  , categoryActionCreators} from '../../../actions';
 import { useDispatch , useSelector } from 'react-redux';
 import { bindActionCreators } from 'redux';
import { getAllCatagoryAction } from '../../../actions/category';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Menus() {
  
    
const menuController = useSelector((state)=>state.menu);
const categoryController = useSelector((state)=>state.category);
    const dispatch = useDispatch();
  const navigate = useNavigate();
    const MenuActionController =bindActionCreators(
        menuActionCreators, dispatch
    );
    const CategoryActionCreators = bindActionCreators(categoryActionCreators, dispatch);

    
   
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
      }, []);
    
  return (
    <div class="container-fluid px-lg-5 px-2 pt-5 position-relative">
    <div class="row">
        <div class="col-lg-8">
          
            <h3 class="font-weight-bolder">Menus</h3>
            <p style={{
              color:'gray'
            }}> {dateState.toLocaleDateString('en-US', {
                 weekday:'long',
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</p>

        </div>
       
        <div class="col-lg-4 d-flex justify-content-lg-end">
            <div>
              
                <button  onClick={()=>{
                  navigate("/catagories");
                }}
                    class="btn btn-default d-flex justify-content-center align-items-center border border-placeholder"><span
                        class="material-icons-outlined medium mr-2">
                      <TbAdjustmentsHorizontal size={25} style={{
                        padding:'2px'
                      }}/>  
                    </span> Manage Catagory</button>
            </div>

        </div>
    </div>
    <div class="dropdown-divider"></div>
    
   
    <Tabs/>
   
    


    
    
 </div>
  )
}
