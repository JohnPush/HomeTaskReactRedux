// import styles from './App.module.css';
import Header from './layouts/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Body from './layouts/Body/Body';
import Search from './components/Search/Search';
import ListFilms from './components/ListFilms/ListFilms';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import { UserContext } from './context/user.context';

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

function App() {
	const [users, setUsers] = useState([]);

	// обращение к localStorage
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setUsers(
				data.map((user) => ({
					...user
				}))
			);
		}
	}, []);

	// запись в localStorage
	useEffect(() => {
		if (users.length) {
			localStorage.setItem('data', JSON.stringify(users));
		}
	}, [users]);

	const addUser = (user) => {
		const existUser = users.find((u) => u.userName === user.userName);
		if (existUser) {
			setUsers((oldUsers) =>
				oldUsers.map((u) =>
					u.userName === user.userName ? { ...u, isLogined: true } : u
				)
			);
		} else {
			setUsers((oldUsers) => [
				...oldUsers,
				{
					userName: user.userName,
					isLogined: true,
					id:
						oldUsers.length > 0 ? Math.max(...oldUsers.map((u) => u.id)) + 1 : 1
				}
			]);
		}
	};

	const logoutUser = () => {
		setUsers(
			users.map((user) => ({
				...user,
				isLogined: false
			}))
		);
	};

	const loggedInUser = users.find((user) => user.isLogined === true);
	const loggedInUserName = loggedInUser ? loggedInUser.userName : '';

	return (
		<UserContext.Provider value={{}}>
			<>
				<Header>
					<NavBar
						loggedInUser={loggedInUserName}
						showIconLogin={users.some((user) => user.isLogined)}
						logoutUser={logoutUser}
					/>
				</Header>
				<Body>
					<Search />
					<ListFilms arrayFilms={arrayFilms} />
					<Login onSubmit={addUser} />
				</Body>
			</>
		</UserContext.Provider>
	);
}

export default App;
