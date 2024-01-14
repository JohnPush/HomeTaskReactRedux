import './App.css';
import Header from './layouts/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Body from './layouts/Body/Body';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';
import InputForm from './components/InputForm/InputForm';
import ListFilm from './components/ListFilm/ListFilm';
import CardButton from './components/CardButton/CardButton';
import RatingButton from './components/RatingButton/RatingButton';

function App() {
	const arrayFilms = [
		{
			id: 1,
			valueRating: 324,
			posterFilm: '/Black Widow.svg',
			nameFilm: 'Black Widow'
		},
		{
			id: 2,
			valueRating: 124,
			posterFilm: '/Shang Chi.svg',
			nameFilm: 'Shang Chi'
		},
		{
			id: 3,
			valueRating: 235,
			posterFilm: '/Loki.svg',
			nameFilm: 'Loki'
		},
		{
			id: 4,
			valueRating: 124,
			posterFilm: '/How I Met Your Mother.svg',
			nameFilm: 'How I Met Your Mother'
		},
		{
			id: 5,
			valueRating: 8125,
			posterFilm: '/Money Heist.svg',
			nameFilm: 'Money Heist'
		},
		{
			id: 6,
			valueRating: 123,
			posterFilm: '/Friends.svg',
			nameFilm: 'Friends'
		},
		{
			id: 7,
			valueRating: 12,
			posterFilm: '/The Big Bang Theory.svg',
			nameFilm: 'The Big Bang Theory'
		},
		{
			id: 8,
			valueRating: 456,
			posterFilm: '/Two And a Half Men.svg',
			nameFilm: 'Two And a Half Men'
		}
	];

	return (
		<div className="app">
			<Header>
				<NavBar />
			</Header>
			<Body>
				<Heading />
				<Paragraph />
				<InputForm />
				<ListFilm>
					{arrayFilms.map((el) => (
						<CardButton
							key={el.id}
							nameFilm={el.nameFilm}
							posterFilm={el.posterFilm}
							valueRating={el.valueRating}
						>
							<RatingButton valueRating={el.valueRating} />
						</CardButton>
					))}
				</ListFilm>
			</Body>
		</div>
	);
}

export default App;
