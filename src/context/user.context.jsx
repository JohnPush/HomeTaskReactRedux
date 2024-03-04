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

	const addUser = (user) => {
		const existUser = users.find((u) => u.userName === user.userName);
		if (!existUser) {
			setUsers([
				...users,
				{
					userName: user.userName,
					isLogined: true,
					id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1
				}
			]);
		}
	};

	return (
		<UserContext.Provider
			value={{ users, setUsers, handleLogout, getCurrentUser, addUser }}
		>
			{children}
		</UserContext.Provider>
	);
};
