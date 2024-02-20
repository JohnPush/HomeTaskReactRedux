import { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children, logoutUser }) => {
	const handleLogout = () => {
		if (logoutUser) {
			logoutUser();
		}
	};

	return (
		<UserContext.Provider value={{ handleLogout }}>
			{children}
		</UserContext.Provider>
	);
};
