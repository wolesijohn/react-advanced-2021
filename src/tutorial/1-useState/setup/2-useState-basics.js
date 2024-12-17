import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText]=useState("hello world")
  const handleClick=()=>{

    if (text==="hello world"){
      setText("random title")
    }
    else{
      setText("hello world")
    }
  }
  return (
  <React.Fragment>
    <h2>{text}</h2>
    <button className="btn" onClick={handleClick}>
      Change Title
    </button>

  </React.Fragment>);
};

export default UseStateBasics;
