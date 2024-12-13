import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
// import { backend_url } from "../../App";

const AddProduct = () => {

  const [image, setImage] = useState(false);
  
  
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    
  });
  

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }


   const AddProduct = async () => {
    let dataObj;
    let product = productDetails;
    let formData = new FormData();
    formData.append('subjectdata', image);

    await fetch('http://localhost:5000/upload1', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((resp) => resp.json())
      .then((data) => { dataObj = data });
    if (dataObj.success) {
      product.image = dataObj.image_url;
      console.log(product);
    }

    await fetch('http://localhost:5000/createsubject', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => { data.success ? alert("Subject Added") : alert("Failed") });
    
    
    
   }
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Subject Name</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Subject Small Description</p>
        <input type="text" name="description" value={productDetails.description} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
      </div>

      <div className="addproduct-itemfield">
        <p>Subject Image</p>
        <label htmlFor="file-input">
          <img className="addproduct-thumbnail-img" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
        </label>
        <input 
        onChange={(e) => setImage(e.target.files[0])} 
        type="file" 
        name="image" 
        multiple 
        id="file-input" 
        accept="image/*" 
        hidden />
      </div>
      
      
      <button className="addproduct-btn" type="submit" onClick={AddProduct}>ADD</button>
    </div>
  );
};

export default AddProduct;
