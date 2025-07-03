import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayoutComponent from "./AppLayoutComponent";
import ExploreComponent from "./ExploreComponent";
import HomeComponent from "./HomeComponent";
import RequireAuth from "./RequireAuthComponent";


const appRouter = createBrowserRouter([
{
	path: "/",
	element: <AppLayoutComponent />,
	errorElement: <ExploreComponent />,
	children:[
		{ path: "/home", element: <HomeComponent />},
		{ path: "/explore", element: <RequireAuth><ExploreComponent /></RequireAuth>}
	]
}])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

