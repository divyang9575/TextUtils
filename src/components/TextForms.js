import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForms(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    console.log("handleclick func");
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("handleOnChange func");
    setText(event.target.value);
  };
  const handleClear = ()=>{
    let newText = '';
    setText(newText);
  }
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <div className="container">
          <h1>{props.text}</h1>
          <div className="form-group mb-3">
            <textarea
            style={{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}}
              className="form-control"
              id="myBox"
              value={text}
              placeholder="Enter the text to make it Uppercase"
              onChange={handleOnChange}
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className="container my-4">
          <h1>Text Summary</h1>
          <p>
            {" "}
            {text.split(" ").length} words and {text.length} characters
          </p>
        </div>
        <div className="container">
          <h2>Preview</h2>
          <p>{text.length > 0 ? text:"Enter something in the above box to preview it"}</p>
        </div>
      </div>
    </>
  );
}

TextForms.propTypes = {
  text: PropTypes.string.isRequired,
};

TextForms.defaultProps = {
  text: "Default hai",
};
