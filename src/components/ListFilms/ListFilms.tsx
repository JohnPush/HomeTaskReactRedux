import styles from './ListFilms.module.css';
import CardFilm from '../CardFilm/CardFilm';

interface Film {
	id: number;
	valueRating: number;
	posterFilm: string;
	nameFilm: string;
}

interface ListFilmsProps {
	arrayFilms: Film[];
}

function ListFilms({ arrayFilms }: ListFilmsProps) {
	return (
		<div className={styles['list-film']}>
			{arrayFilms.length ? (
				arrayFilms.map((el) => <CardFilm key={el.id} {...el} />)
			) : (
				<div className={styles['no-films']}>Фильмов нет</div>
			)}
		</div>
	);
}

export default ListFilms;
