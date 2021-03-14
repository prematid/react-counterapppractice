import React from "react";

const Comp1 = (props) => {
  return (
    <div>
     
      <p>{props.Name}</p>
      <button
        onClick={() => {
          <p>you clicked id</p>;
        }}
      >
        Hey
      </button>
      
    </div>
  );
};

export default Comp1;