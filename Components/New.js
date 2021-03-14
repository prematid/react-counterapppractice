import React from "react";
import Comp1 from "./Comp1";
import React, { useState } from "react";

const pass = {
  name: "Prem"
};

const New = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter App</p>
       <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase by 1</button>
      <button onClick={() => setCount(count - 1)}>Decrease by 1</button>
      
      <button onClick={New1}>New Comp Call</button>
      
    </div>
  );
};

const New1 =(props)=> {
  return(
    <div>
     <Comp1 Name={pass.name} /> 
    </div>
  )
}
 
export default New;
