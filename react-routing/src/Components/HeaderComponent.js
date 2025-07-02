import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./styleComponents.css"

const HeaderComponent = () => {
  
  return (
    <div id="header-container">
      <h2 id="nav-header">React Routing</h2>
	  <div id="nav-items">
        <div id="nav-item"><Link to="/home">Home</Link></div>
        <div id="nav-item"><Link to="/explore">Explore</Link></div>
        <div id="nav-item"><Link to="/connect">Connect</Link></div>
	  </div>
	</div>
  )

}

export default HeaderComponent;