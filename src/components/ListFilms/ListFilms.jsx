import styles from './ListFilms.module.css';
import RatingButton from '../RatingButton/RatingButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function ListFilms({ arrayFilms }) {
	return (
		<div className={styles['list-film']}>
			{arrayFilms.map((el) => (
				<div key={el.id} className={styles['card-button']}>
					<RatingButton valueRating={el.valueRating} />
					<div>
						<img src={el.posterFilm} alt="poster" />
					</div>
					<div>{el.nameFilm}</div>
					<FavoriteButton />
				</div>
			))}
		</div>
	);
}

export default ListFilms;
