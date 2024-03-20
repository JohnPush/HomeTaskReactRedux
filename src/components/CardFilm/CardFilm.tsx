import styles from './CardFilm.module.css';
import RatingButton from '../RatingButton/RatingButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Link } from 'react-router-dom';

interface CardFilmProps {
	id: string;
	name: string;
	image: string;
	rating: number;
}

function CardFilm(props: CardFilmProps) {
	return (
		<Link to={`/movie/${props.id}`} className={styles['link']}>
			<div key={props.id} className={styles['card-button']}>
				<RatingButton valueRating={props.rating} />
				<div className={styles['poster']}>
					<img src={props.image || ''} alt="poster" />
				</div>
				<div>{props.name || ''}</div>
				<FavoriteButton />
			</div>
		</Link>
	);
}

export default CardFilm;