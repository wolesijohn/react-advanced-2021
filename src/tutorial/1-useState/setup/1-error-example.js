import React from 'react';

const ErrorExample = () => {
  let title= "change title";
  const handleClick=()=>{
    title="hello people";
    console.log(title);
  };

  return (
  <React.Fragment>
    <h2>{title}</h2>
    <button className="btn" onClick={handleClick}>
      Random title
    </button>

  </React.Fragment>
);
};

export default ErrorExample;
