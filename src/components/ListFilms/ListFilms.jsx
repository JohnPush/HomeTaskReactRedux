import { useState } from 'react';
import './ListFilms.css';
import RatingButton from '../RatingButton/RatingButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function ListFilms({ arrayFilms }) {
	const [selectedFilm, setSelectedFilm] = useState(null);

	const handleButtonClick = (filmId) => {
		setSelectedFilm(filmId === selectedFilm ? null : filmId);
	};

	return (
		<div className="list-film">
			{arrayFilms.map((el) => (
				<button
					key={el.id}
					className={`card-button ${
						el.id === selectedFilm ? 'card-button_click' : ''
					}`}
					onClick={() => handleButtonClick(el.id)}
				>
					<RatingButton valueRating={el.valueRating} />
					<div>
						<img src={el.posterFilm} alt="poster" />
					</div>
					<div>{el.nameFilm}</div>
					<FavoriteButton />
				</button>
			))}
		</div>
	);
}

export default ListFilms;
