import React from "react";
import ReactDOM from "react-dom/client";
import Shimmer from "./Shimmer";
import "./styles.css"

const App = () => {
  return (
    <div id="main-container">
      <h1 id="main-heading">A Shimmer UI</h1>
      <Shimmer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

