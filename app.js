const heading = React.createElement("h1", {}, "Hello World frm namaste React");


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Hi this is Parent nested div"),React.createElement("h2",{},"Hi this is h2")]
  )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);