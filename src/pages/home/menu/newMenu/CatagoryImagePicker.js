import { display } from '@mui/system';
import React ,{useState , useEffect}from 'react'
import { IoImageOutline } from "react-icons/io5";
import { API_BASE_URL } from '../../../../services/api-config';
import Image from 'react-bootstrap/Image'

import { RiDeleteBin5Line } from "react-icons/ri";
export default function CatagoryImagePicker(props) {
    const [selectedFile, setSelectedFile] = useState();
   
    const [preview, setPreview] = useState();
    useEffect(() => {
      if (preview) {
        props.handleClick(preview);
      }
    });
  
    useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
  
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      props.handleSetFIle(selectedFile);
      
  
      return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);
    const onSelectFile = (e) => {
      
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined);
        return;
      }
  
      setSelectedFile(e.target.files[0]);
    };

    return (
      <div className="restaurantImagePicker col-12" style={{
       
    height:'150px',    
    position: 'relative',
   
    
    borderRadius:'20px' ,
    marginRight:'10px',
    justifyContent:'center',
    marginTop:'15px'
   
      }}>
       
  
        {preview ? <img className="img-fluid" src={props.imageUrl} style={{
           height:'150px', 
           width:"100%",
           borderRadius:'10px'
        }} alt="" />:<img className="img-fluid" src={`${API_BASE_URL}/Menu/Photos/${props.apiImage}`} style={{
           height:'150px', 
           width:"100%",
           borderRadius:'10px'
        }} alt="" />}
        
               <div style={{
                    position:'absolute',
           bottom:'5px',
           right:'20px',
           width:'100px',
           height:'30px',
           width:'40px',
           backgroundColor:'black',
           height:'40px',
           borderRadius:'50%',

           display:'flex',
           justifyContent:'center'

           
               }}>
              <label
                className="btn text-light"
                onChange={onSelectFile}
                htmlFor={props.id}
              >
              
                <input name="" type="file" id={props.id} hidden />

                <IoImageOutline size={18} />
              </label>
            </div>
       
        
      </div>
    );
  }

  export  function MenuImagePicker(props) {
   
   
  

    return (
      <div className="restaurantImagePicker col-12" style={(props.imageUrl)?{
       
        height:'150px',    
        position: 'relative',
       
   
        borderRadius:'20px' ,
        marginRight:'10px',
        justifyContent:'center',
        marginTop:'15px'
       
          }:{
       
       height:'150px',    
       position: 'relative',
      
       backgroundColor:'#fff7d9',
       borderRadius:'20px' ,
       marginRight:'10px',
       justifyContent:'center',
       marginTop:'15px'
      
         }}>
       
  
        {props.imageUrl && <img className="img-fluid" src={props.imageUrl} style={{
           height:'150px', 
           width:"100%",
           borderRadius:'10px'
        }} alt="" />}
        
               <div style={{
                    position:'absolute',
           
           right:'20px',
          top:'20px',
           height:'30px',
           width:'40px',
           backgroundColor:'black',
           height:'40px',
           borderRadius:'50%',
           
           display:'flex',
           justifyContent:'center',
           alignSelf:'center',
           alignItems:'center'

           
               }}>
               <label onClick={()=>{
                
                props.handleClick(null);
                props.imgController();

               }}>
               
                <RiDeleteBin5Line size={18} color="white"  style={{
                  marginBottom:'3px'
                }}/></label>
              
            </div>
       
        
      </div>
    );
  }

