import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user.context.tsx';
import { useContext } from 'react';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const userContext = useContext(UserContext);
	const { getCurrentUser  } = userContext;
	const { loggedInUser } = getCurrentUser();
	console.log(loggedInUser)
	if (loggedInUser === null) {
		return <Navigate to="/login" replace />;
	}
	return children;
};