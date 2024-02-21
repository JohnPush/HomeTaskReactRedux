import styles from './CardFilm.module.css';
import RatingButton from '../RatingButton/RatingButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function CardFilm({ film }) {
	return (
		<div key={film.id} className={styles['card-button']}>
			<RatingButton valueRating={film.valueRating} />
			<div>
				<img src={film.posterFilm || ''} alt="poster" />
			</div>
			<div>{film.nameFilm || ''}</div>
			<FavoriteButton />
		</div>
	);
}

export default CardFilm;
