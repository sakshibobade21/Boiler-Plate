import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

const App = () => {
  return(
    <div>
      <h1>Sample App</h1>
      <p>Sample Text Here</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);