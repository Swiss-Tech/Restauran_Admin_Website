import React, { useState, useEffect } from "react";
import { IoImageOutline } from "react-icons/io5";
import { Col } from "react-bootstrap";
export function ImagePicker(props) {

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (preview) {
      props.handleClick(selectedFile);
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
    
    <div className="imagePicker" style={(preview) ?{
      
     
      backgroundColor:'transparent',
      
     
      
    
    }:{}}>
  
    
      {(preview  ) && <img className="img-fluid" src={preview} alt="" />}
      <div className="centbutton btn  bg-dark px-2 py-2 rounded-circle  d-flex align-items-center justify-content-center">
        <span className="material-icons-outlined text-light">
          <div>
            <label
              className="btn text-light"
              onChange={onSelectFile}
              htmlFor={props.id}
            >
            
              <input name="" type="file" id={props.id} hidden />
              <IoImageOutline size={22} />
            </label>
          </div>
        </span>
      </div>
    </div>
  );
}

export function RestaurantImage (props) {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (preview) {
      props.handleClick(selectedFile);
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
    <div className="restaurantImagePicker" style={(preview)?{
  
      margin:'10px',
      backgroundColor:'transparent'
    }:{
 
      margin:'10px'
    }}>
      {preview && <img className="img-fluid" src={preview} alt="" />}
      <div className="centbutton btn  bg-dark px-2 py-2 rounded-circle  d-flex align-items-center justify-content-center">
        <span className="material-icons-outlined text-light">
          <div>
            <label
              className="btn text-light"
              onChange={onSelectFile}
              htmlFor={props.id}
            >
            
              <input name="" type="file" id={props.id} hidden />
              <IoImageOutline size={22} />
            </label>
          </div>
        </span>
      </div>
    </div>
  );
}