// import styles from './App.module.css';
import Header from './layouts/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Body from './layouts/Body/Body';
import Search from './components/Search/Search';
import ListFilms from './components/ListFilms/ListFilms';
import Login from './components/Login/Login';
// import { useContext } from 'react';
import { UserProvider } from './context/user.context';

// import { useLocalStorage } from './hooks/use-localstorage.hook';

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

// function mapUsers(users) {
// 	if (!users) {
// 		return [];
// 	}
// 	return users.map((i) => ({
// 		...i,
// 		date: new Date(i.date)
// 	}));
// }

function App() {
	return (
		<UserProvider>
			<>
				<Header>
					<NavBar />
				</Header>
				<Body>
					<Search />
					<ListFilms arrayFilms={arrayFilms} />
					<Login />
				</Body>
			</>
		</UserProvider>
	);
}

export default App;
