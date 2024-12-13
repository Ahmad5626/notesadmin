import React from "react";
import "./CSS/Admin.css";
import Sidebar from "../Components/Sidebar/Sidebar";
//  
import { Route, Routes } from "react-router-dom";
import AddProduct from "../Components/AddProduct/AddProduct";
import ListProduct from "../Components/ListProduct/ListProduct";
import AddChapter from "../Components/addChapter/AddChapter";

const Admin = () => {

  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addsubject" element={<AddProduct />} />
        <Route path="/addchapter" element={<AddChapter />} />
      </Routes>
    </div>
  );
};

export default Admin;
