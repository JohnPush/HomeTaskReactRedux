import { createContext } from 'react';
import { useLocalStorage } from '../hooks/use-localstorage.hook';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useLocalStorage('data', []);

	const handleLogout = () => {
		setUsers(users.map((user) => ({ ...user, isLogined: false })));
	};

	return (
		<UserContext.Provider value={{ handleLogout }}>
			{children}
		</UserContext.Provider>
	);
};
