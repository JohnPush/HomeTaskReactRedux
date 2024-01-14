import './CardButton.css';
import RatingButton from '../RatingButton/RatingButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function CardButton({ posterFilm, nameFilm, valueRating }) {
	return (
		<button className="card-button">
			<RatingButton valueRating={valueRating} />
			<div>
				<img src={posterFilm} alt="poster" />
			</div>
			<div>{nameFilm}</div>
			<FavoriteButton />
		</button>
	);
}

export default CardButton;
