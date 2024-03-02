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

	return (
		<UserContext.Provider value={{ users, setUsers, handleLogout }}>
			{children}
		</UserContext.Provider>
	);
};
