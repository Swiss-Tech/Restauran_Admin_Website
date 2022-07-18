import { display } from '@mui/system';
import React ,{useState , useEffect}from 'react'
import { IoImageOutline } from "react-icons/io5";
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
    backgroundColor:'#FFF0D4',
    borderRadius:'20px' ,
    marginRight:'10px',
    justifyContent:'center',
    marginTop:'15px'
   
      }}>
        {preview && <img className="img-fluid" src={props.imageUrl} alt="" />}
        
               <div style={{
                    position:'absolute',
           bottom:'10px',
           right:'10px',
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