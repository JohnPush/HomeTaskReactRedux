import styles from './PageSearch.module.css';
import Search from '../../components/Search/Search';
import ListFilms from '../../components/ListFilms/ListFilms';

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

export function PageSearch() {
	return (
		<div className={styles['pageSearch']}>
			<Search />
			<ListFilms arrayFilms={arrayFilms} />
		</div>
	);
}
