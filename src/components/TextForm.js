import React from "react";
import PropTypes from 'prop-types'
import { useState } from "react";

export default function TextForm(props) {

  const handleOnChange= (event)=>{
    // console.log("Handle On changes");
    setText(event.target.value);
  }

  const handleUpClick= ()=>{
    // console.log("Uppercase was clicked");
    let newT = text.toUpperCase();
    setText(newT);
    props.showAlert(" Converted to Upper Case!", "success");
  }
  
  const handleLoClick=()=>{
    let newt = text.toLowerCase();
    setText(newt);
    props.showAlert(" Converted to Lower Case!", "success");
  }

  const [text, setText] = useState('');
  return (
    <>

    <div className= "container" style={{color: props.mode === 'dark'? 'white' : '#13175d'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : '#13175d'}} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary me-4" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lower Case</button>
    </div>

    <div className="container mt-4" style={{color: props.mode === 'dark'? 'white' : '#13175d'}}>
      <h2>Your Text Summary</h2>
      {/* <p>{`Count of words : ${text.split(" ").length}`}</p> */}
      <p>{`Count of words : ${(text==="")? 0: text.trim().replace(/  +/g, ' ').split(" ").length}`}</p>
      <p>{`Number of characters : ${text.length}`}</p>
    </div>

    <div className="container mt-4" style={{color: props.mode === 'dark'? 'white' : '#13175d'}}>
      <h1>Preview</h1>
      <p>{text === ''? 'Enter something in the textbox to preview it here': text}</p>
    </div>

    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string
}
TextForm.defaultProps = {
  heading: 'Enter heading here'
}