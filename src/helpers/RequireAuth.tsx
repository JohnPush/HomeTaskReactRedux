import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';


export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const profiles = useSelector((state: RootState) => state.user.profile);
  	const isUserLoggedIn = profiles && profiles.some(profile => profile.isLogined);

	if (!isUserLoggedIn) {
		return <Navigate to="/login" replace />;
	}
	return children;
};