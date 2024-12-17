import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]=useState({name:"wole",age:36,message:"hello world"})
  const changeMessage=()=>{
    setPerson({...person,message:"I got an admission to Portland State University"})

  }
  return (
  <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={changeMessage}>change message</button>
  </>

  );
};

export default UseStateObject;
