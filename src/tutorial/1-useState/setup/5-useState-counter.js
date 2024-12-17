import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue]=useState(0);
  const reset=()=>{
    setValue(0)
  }

  return (<>
            <section style={{margin:"4 rem 0"}}>
              <h2>Counter</h2>
              <h1>{value}</h1>
              <button className="btn" onClick={()=>setValue(value+1)}>Increase</button>
              <button className="btn" onClick={reset}>Reset</button>
              <button className="btn" onClick={()=>setValue(value-1)}>Decrease</button>


            </section>
  
  
  
  
  </>);
};

export default UseStateCounter;
