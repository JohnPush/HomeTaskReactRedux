import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export const UserContext = createContext<UserContextType | null>(null);

export interface User {
	userName: string;
	isLogined: boolean;
	id: number;
}

interface UserContextType {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  handleLogout: () => void;
  getCurrentUser: () => { loggedInUser: User | null; loggedInUserName: string };
  addUser: (user: User) => void;
}

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }:UserProviderProps) => {
	const [users, setUsers] = useState<User[]>(() => {
		const storedData = localStorage.getItem('data');
		return storedData ? JSON.parse(storedData) : [];
	});
	const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
	const [loggedInUserName, setLoggedInUserName] = useState<string>('');

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(users));
	}, [users]);

	useEffect(() => {
		const user = users.find((user) => user.isLogined === true);
		if (user) {
			setLoggedInUser(user);
			setLoggedInUserName(user.userName);
		} else {
			setLoggedInUser(null);
			setLoggedInUserName('');
		}
	}, [users]);

	const handleLogout = () => {
		setUsers(users.map((user) => ({ ...user, isLogined: false })));
	};

	const getCurrentUser = () => {
		return { loggedInUser, loggedInUserName };
	};

	const addUser = (user: User) => {
		const existUser = users.find((u) => u.userName === user.userName);
		if (existUser) {
			setUsers((oldUsers) =>
				oldUsers.map((u) =>
					u.userName === user.userName ? { ...u, isLogined: true } : u
				)
			);
		} else {
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
