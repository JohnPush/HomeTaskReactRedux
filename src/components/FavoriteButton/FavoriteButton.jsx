import './FavoriteButton.css';
import { useState } from 'react';

function FavoriteButton({ onClick }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleButtonClick = (e) => {
		e.stopPropagation();
		setIsFavorite(!isFavorite);
		if (onClick) {
			onClick();
		}
	};

	return (
		<button
			className={`favorite-button ${
				isFavorite ? 'favorite-button_active' : ''
			}`}
			onClick={handleButtonClick}
		>
			<div>
				<img
					src={isFavorite ? '/like active.svg' : '/like.svg'}
					alt="icon rating"
				/>
			</div>
			<div>{isFavorite ? 'В избранном' : 'В избранное'}</div>
		</button>
	);
}

export default FavoriteButton;
