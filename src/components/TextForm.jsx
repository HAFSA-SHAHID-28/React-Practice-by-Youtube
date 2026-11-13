import React, { useState } from "react";

export default function TextForm(props) {


    const [text, setText] = useState("");

     const handleUp = () => {
        // console.log("Button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }

    const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}


    
     const handleLo = () => {
        let newText = text.toLowerCase();
        setText(newText)
        
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
    }

      const handleClear = () => {
        let newText = "";
        setText(newText)
        
    }

    const handleOnChange = (e) => {
        // console.log("on change");
        setText(e.target.value)
        
    }


  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="form-field mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUp}>Convert to UpperCase</button>

    </div>
    </>
  );
}
