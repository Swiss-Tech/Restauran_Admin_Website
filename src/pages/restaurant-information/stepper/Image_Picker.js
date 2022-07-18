import React, { useState, useEffect } from "react";
import { IoImageOutline } from "react-icons/io5";
export function ImagePicker(props) {
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
    <div className="imagePicker col-12">
      {preview && <img className="img-fluid" src={props.imageUrl} alt="" />}
      <div className="centbutton btn  bg-dark px-2 py-2 rounded-circle  d-flex align-items-center justify-content-center">
        <span class="material-icons-outlined text-light">
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
    <div className="restaurantImagePicker col-12">
      {preview && <img className="img-fluid" src={props.imageUrl} alt="" />}
      <div className="centbutton btn  bg-dark px-2 py-2 rounded-circle  d-flex align-items-center justify-content-center">
        <span class="material-icons-outlined text-light">
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