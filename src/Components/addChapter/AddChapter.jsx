import React, { useState } from "react";
import "../AddProduct/AddProduct";
import upload_area from "../Assets/upload_area.svg";
import { useEffect } from "react";
// import { backend_url } from "../../App";

const AddChapter = () => {





  
  const [subject,setSubject]=useState([])
  
  useEffect(() => {  
       
    fetch("http://localhost:5000/subjects")
   .then((res) => res.json())
   .then((data) => setSubject(data))
       
     
   }, []) 
// console.log(subject);

  const [notedemopgf, setNotedemopgf] = useState();
  const [notefullpdf, setNotefullpdf] = useState();
  const [distionarydemopdf, setDistionarydemopdf] = useState();
  const [distionaryfullpdf, setDistionaryfullpdf] = useState();
 
  
 
  

// console.log(notedemopgf, notefullpdf, distionarydemopdf, distionaryfullpdf);



  
  const [chapterDetails, setChapterDetails] = useState({
    name: "",
    subjectname: "",
    allpdf:[],
    
   
   
  });

  
  
  
  const changeHandler = (e) => {
    setChapterDetails({ ...chapterDetails, [e.target.name]: e.target.value });
  }
  // console.log(chapterDetails);
  

   const addChapters = async () => {

// 1

    let dataObj1=[];
    let chapterdata = chapterDetails;
    let pdfarray=[
      notedemopgf,
      notefullpdf,
      distionarydemopdf,
      distionaryfullpdf
    ]
    console.log(pdfarray);
  
    
    let formData1 = new FormData();

    for (let i = 0; i < pdfarray.length; i++) {
      formData1.append('subjectimage', pdfarray[i]);
    }
    formData1.append('chaterdata',JSON.stringify(chapterdata));


    await fetch('http://localhost:5000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData1, 
    }).then((resp) => resp.json())
    .then((data) => { data.success ? alert("Chapter Added") : alert("Failed") });

    // await fetch('http://localhost:5000/addchapter', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(chapterdata),
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => { 
        
    //     data.success ? alert("Chapter Added") : alert("Failed") });
    
    
    
   }
  


  return (
    <div className="addproduct">
{/* <input type="file"
onChange={(e) => {setOne(e.target.files[0])}}
name="one"
/>

<input type="file"
onChange={(e) => {setTwo(e.target.files[0])}}
name="two"
/> */}




      <div className="addproduct-itemfield">
        <p>Chapter Name</p>
        <input type="text" name="name" value={chapterDetails.name} onChange={(e) => { changeHandler(e) }} placeholder="Type here" />
      </div>
      
<h4 className="addproduct-itemfield">All PDF</h4>
      
      <div className="addproduct-price">
      <div className="addproduct-itemfield">
        <p>Notes Demo PDF</p>
        <label htmlFor="file-input1">
          <img className="addproduct-thumbnail-img" src={ upload_area } alt="" />
        </label>
        <input 
        
        onChange={(e)=> setNotedemopgf(e.target.files[0])}
        type="file" 
        name="notedemopgf" 
        multiple 
        id="file-input1" 
        accept="pdf/*" 
        hidden />
      </div>

      <div className="addproduct-itemfield">
        <p>Notes Full PDF</p>
        <label htmlFor="file-input2">
          <img className="addproduct-thumbnail-img" src={upload_area } alt="" />
        </label>
        <input 
         type="file" 
        onChange={(e)=> setNotefullpdf(e.target.files[0])}
       
        name="notefullpdf" 
        multiple 
        id="file-input2" 
        accept="pdf/*" 
        hidden
        />
      </div>
      </div>



      <div className="addproduct-price">
      <div className="addproduct-itemfield">
        <p>Dictionary Demo PDF</p>
        <label htmlFor="file-input3">
          <img className="addproduct-thumbnail-img" src={upload_area } alt="" />
        </label>
        <input  
        type="file"
        onChange={(e) => setDistionarydemopdf(e.target.files[0])} 
        
        name="distionarydemopdf" 
        multiple 
        id="file-input3" 
       
        hidden />
      </div>

      <div className="addproduct-itemfield">
        <p>Dictionary Full PDF</p>
        <label htmlFor="file-input4">
          <img className="addproduct-thumbnail-img" src={upload_area } alt="" />
        </label>
        <input
        type="file"  
        onChange={(e) => setDistionaryfullpdf(e.target.files[0])} 
        
        name="distionaryfullpdf" 
        multiple 
        id="file-input4" 
       
        hidden />
      </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Subject Name</p>
        <select value={chapterDetails.subjectname} name="subjectname" className="add-product-selector" onChange={changeHandler}>
         
         {subject.map((subject) => <option value={subject.name}>{subject.name}</option>)}
         
         
        </select>
      </div>
      
      <button className="addproduct-btn" type="submit" onClick={addChapters}>ADD</button>
    </div>
  );
};

export default AddChapter;
