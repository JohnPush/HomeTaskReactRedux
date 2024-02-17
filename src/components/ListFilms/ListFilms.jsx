import styles from './ListFilms.module.css';
import CardFilm from '../CardFilm/CardFilm';

function ListFilms({ arrayFilms }) {
	return (
		<div className={styles['list-film']}>
			{!!arrayFilms.length ? (
				arrayFilms.map((el) => <CardFilm key={el.id} film={el} />)
			) : (
				<div className={styles['no-films']}>Фильмов нет</div>
			)}
		</div>
	);
}

export default ListFilms;
