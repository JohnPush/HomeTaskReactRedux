import styles from './CardFilm.module.css';
import RatingButton from '../RatingButton/RatingButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Link } from 'react-router-dom';

interface CardFilmProps {
		id: number;
		valueRating: number;
		posterFilm: string;
		nameFilm: string;
}

function CardFilm(props: CardFilmProps) {
	return (
		<Link to={`/movie/${props.id}`} className={styles['link']}>
			<div key={props.id} className={styles['card-button']}>
				<RatingButton valueRating={props.valueRating} />
				<div>
					<img src={props.posterFilm || ''} alt="poster" />
				</div>
				<div>{props.nameFilm || ''}</div>
				<FavoriteButton />
			</div>
		</Link>
	);
}

export default CardFilm;
