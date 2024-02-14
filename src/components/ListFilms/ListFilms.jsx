import styles from './ListFilms.module.css';
import CardFilm from '../CardFilm/CardFilm';

function ListFilms({ arrayFilms }) {
	if (arrayFilms.length === 0) {
		return null;
	}

	return (
		<div className={styles['list-film']}>
			{arrayFilms.map((el) => (
				<CardFilm key={el.id} film={el} />
			))}
		</div>
	);
}

export default ListFilms;
