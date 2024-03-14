import styles from './CardFilm.module.css';
import RatingButton from '../RatingButton/RatingButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Link } from 'react-router-dom';

interface CardFilmProps {
	film: 
	{
		id: number;
		valueRating: number;
		posterFilm: string;
		nameFilm: string;
	};
}

function CardFilm({ film }: CardFilmProps) {
	return (
		<Link to={`/movie/${film.id}`} className={styles['link']}>
			<div key={film.id} className={styles['card-button']}>
				<RatingButton valueRating={film.valueRating} />
				<div>
					<img src={film.posterFilm || ''} alt="poster" />
				</div>
				<div>{film.nameFilm || ''}</div>
				<FavoriteButton />
			</div>
		</Link>
	);
}

export default CardFilm;
