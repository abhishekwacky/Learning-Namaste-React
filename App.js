import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "Hello AK"),
    React.createElement("h2", {}, "Wassup"),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "Hello AK"),
    React.createElement("h2", {}, "Wassup"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
