// import styles from './App.module.css';
import Header from './layouts/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Body from './layouts/Body/Body';
import Search from './components/Search/Search';
import ListFilms from './components/ListFilms/ListFilms';
import Login from './components/Login/Login';
// import { useEffect, useState } from 'react';
// import { UserProvider } from './context/user.context';
import { useLocalStorage } from './hooks/use-localstorage.hook';

const arrayFilms = [
	// {
	// 	id: 1,
	// 	valueRating: 324,
	// 	posterFilm: '/Black Widow.svg',
	// 	nameFilm: 'Black Widow'
	// },
	// {
	// 	id: 2,
	// 	valueRating: 124,
	// 	posterFilm: '/Shang Chi.svg',
	// 	nameFilm: 'Shang Chi'
	// },
	// {
	// 	id: 3,
	// 	valueRating: 235,
	// 	posterFilm: '/Loki.svg',
	// 	nameFilm: 'Loki'
	// },
	// {
	// 	id: 4,
	// 	valueRating: 124,
	// 	posterFilm: '/How I Met Your Mother.svg',
	// 	nameFilm: 'How I Met Your Mother'
	// },
	// {
	// 	id: 5,
	// 	valueRating: 8125,
	// 	posterFilm: '/Money Heist.svg',
	// 	nameFilm: 'Money Heist'
	// },
	// {
	// 	id: 6,
	// 	valueRating: 123,
	// 	posterFilm: '/Friends.svg',
	// 	nameFilm: 'Friends'
	// },
	// {
	// 	id: 7,
	// 	valueRating: 12,
	// 	posterFilm: '/The Big Bang Theory.svg',
	// 	nameFilm: 'The Big Bang Theory'
	// },
	// {
	// 	id: 8,
	// 	valueRating: 456,
	// 	posterFilm: '/Two And a Half Men.svg',
	// 	nameFilm: 'Two And a Half Men'
	// }
];

function mapUsers(users) {
	if (!users) {
		return [];
	}
	return users.map((i) => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const [users, setUsers] = useLocalStorage('data', []);

	const addUser = (user) => {
		const existUser = users.find((u) => u.userName === user.userName);
		if (existUser) {
			setUsers((oldUsers) =>
				oldUsers.map((u) =>
					u.userName === user.userName ? { ...u, isLogined: true } : u
				)
			);
		} else {
			setUsers([
				...mapUsers(users),
				{
					userName: user.userName,
					isLogined: true,
					id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1
				}
			]);
		}
	};

	const loggedInUser = users.find((user) => user.isLogined === true);
	const loggedInUserName = loggedInUser ? loggedInUser.userName : '';

	return (
		<>
			<Header>
				<NavBar
					loggedInUser={loggedInUserName}
					users={users}
					setUsers={setUsers}
				/>
			</Header>
			<Body>
				<Search />
				<ListFilms arrayFilms={arrayFilms} />
				{!loggedInUser && <Login onSubmit={addUser} />}
			</Body>
		</>
	);
}

export default App;
