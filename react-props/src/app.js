import React from "react";
import ReactDOM from "react-dom/client";
import UserList from "./Components/UserList";
import "./style.css"

const App = () => {
  return(
    <div id="main-div">
        <h1>Heading Goes Here</h1>
        <UserList />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);