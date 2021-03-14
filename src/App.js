import React from "react";
import "./style.css";
import New from "../Components/New";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p id="a">Call from Parent to child.</p>
      <New />
    </div>
  );
}
