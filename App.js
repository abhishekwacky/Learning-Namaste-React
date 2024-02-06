import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 id="head">Wassup Abhishek JSX</h1>;

// Component Compositions
const HeadingComp = () => (
  <div id="container">
    {title}
    <h1 id="heading">Hello Abhishek functional component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);
