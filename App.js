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

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Namaste React"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
