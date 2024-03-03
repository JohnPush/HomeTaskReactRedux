import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState(() => {
		const storedData = localStorage.getItem('data');
		return storedData ? JSON.parse(storedData) : [];
	});

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(users));
	}, [users]);

	const handleLogout = () => {
		setUsers(users.map((user) => ({ ...user, isLogined: false })));
	};

	const getCurrentUser = () => {
		const loggedInUser = users.find((user) => user.isLogined === true);
		const loggedInUserName = loggedInUser ? loggedInUser.userName : '';
		return { loggedInUser, loggedInUserName };
	};

	return (
		<UserContext.Provider
			value={{ users, setUsers, handleLogout, getCurrentUser }}
		>
			{children}
		</UserContext.Provider>
	);
};
