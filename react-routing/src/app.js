import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './Components/AppLayout';
import ConnectComponent from './Components/ConnectComponent';
import HomeComponent from './Components/HomeComponent';
import ExploreComponent from './Components/ExploreComponent';
import "./styles.css";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ConnectComponent/>,
		children: [
			{ path: "/home", element: <HomeComponent/>},
			{ path: "/connect", element: <ConnectComponent/>},
			{ path: "/explore", element: <ExploreComponent/>}
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);