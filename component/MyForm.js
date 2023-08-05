import React, { useState } from 'react';

export default function MyForm(props) {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('black');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleColorClick = () => {
    let newColor = textColor === 'black' ? 'red' : 'green';
    setTextColor(newColor);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"
            style1={{ color: textColor }} // Set text color based on state
          ></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className='btn btn-primary mx-1' onClick={handleColorClick}>
          Change text color
        </button>
      </div>
      <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} <b>Minutes Read</b></p>
        

        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to preview'}</p>
      </div>
    </>
  );
}
