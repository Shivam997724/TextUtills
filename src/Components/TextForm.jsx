import { useState } from "react"
import React from 'react'

 const TextForm = (props) => {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase!",'success')
    } 

    const handleDownClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to Lowercase!",'success')
    }

    const handleClearClick = () => {
        let newtext = ""
        setText(newtext)
        props.showAlert("clear all successfully!",'success')
    }
    
   const handleCopy = ()=> {
   navigator.clipboard.writeText(text);
    props.showAlert("Copy successfully!",'success')
   } 

   const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove extra spaces!",'success')
   }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("enter the text here")
    return (
        <>
        <div>
            <div className="mb-3">
                <h1 style={{color :props.mode ==='dark'?'white':'#352D39'}}>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#352d43':'white' ,color: props.mode==='dark'?'white':'#352D39'}} id="mybox" rows="8"></textarea>
            </div>
            
                <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="container my-3" style={{color :props.mode ==='dark'?'white':'#352D39'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return  element.length!==0}).length} words and {text.length} character and {text.split(".").filter((element)=>{return  element.length!==0}).length } sentences </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return  element.length!==0}).length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
export default TextForm;