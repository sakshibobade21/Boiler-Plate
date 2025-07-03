import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

const AppLayoutComponent = () => {
	return(
		<div>
				<h2>AppLayout Component!</h2>
        <Outlet/>
		</div>
	)
}

export default AppLayoutComponent;