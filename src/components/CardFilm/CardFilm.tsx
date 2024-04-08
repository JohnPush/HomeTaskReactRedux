import { Link } from 'react-router-dom';
import styles from './CardFilm.module.css';
import Rating from '../Rating/Rating';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

interface CardFilmProps {
	id: number;
	name: string;
	description?: string;
	image: string;
	price: number;
	rating: number;
}

function CardFilm(props: CardFilmProps) {
	return (
		<Link to={`/movie/${props.id}`} className={styles['link']}>
			<div key={props.id} className={styles['card-button']}>
				<div className={styles['rating']}>
					<Rating valueRating={props.rating} />
				</div>
				<div className={styles['poster']}>
					<img src={props.image || ''} alt="poster" />
				</div>
				<div>{props.name || ''}</div>
				<FavoriteButton id={props.id} />
			</div>
		</Link>
	);
}

export default CardFilm;