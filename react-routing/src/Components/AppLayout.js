import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import { Outlet } from "react-router-dom";
import "./styleComponents.css";

const AppLayout = () => {
  return(
		<div id="app-layout">
      <HeaderComponent />
      <Outlet />
		</div>
	)
}

export default AppLayout;