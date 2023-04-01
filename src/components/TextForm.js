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

  const handleRemoveXS=()=>{
    let newT= text.trim();
    newT = newT.replace(/ +(?= )/g,'');
    setText(newT);
    props.showAlert(" Removed Extra white spaces!", "success");
  }

  const handleCopyText= () =>{
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to your device's Clipboard!", "success");
  }

  const handleClearText=()=>{
    setText('');
    props.showAlert(" Text cleared!", "success");
  }


  const [text, setText] = useState('');
  return (
    <>

    <div className= "container" style={{color: props.mode === 'dark'? 'white' : '#13175d'}}>
      <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#13466e' : 'white', color: props.mode === 'dark'? 'white' : '#13175d'}} id="myBox" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveXS}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
    </div>

    <div className="container mt-4" style={{color: props.mode === 'dark'? 'white' : '#13175d'}}>
      <h2>Your Text Summary</h2>
      {/* <p>{`Count of words : ${text.split(" ").length}`}</p> */}
      <p>{`Count of words : ${text.split(/\s+/).filter((element) =>{return element.length !== 0}).length}`}</p>
      <p>{`Number of characters : ${text.length}`}</p>
    </div>

    <div className="container mt-4" style={{color: props.mode === 'dark'? 'white' : '#13175d'}}>
      <h1>Preview</h1>
      <p className="text-break">{text === ''? 'Nothing to preview': text}</p>
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