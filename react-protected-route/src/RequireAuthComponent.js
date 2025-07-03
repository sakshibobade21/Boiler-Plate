import { Form, Navigate, useLocation } from "react-router-dom"

const RequireAuth = ({childern}) => {

  const isAuthenticated = false;
  const currentPath = useLocation();

	if(!isAuthenticated) {
    return <Navigate to="/" state={{ from: currentPath }} replace />
	}

	return childern;

	// In Login Component
	// After Login is successful
	// const prevLocation = useLocation();
	// navigate(prevLocation.state?.from || "/home");

}

export default RequireAuth