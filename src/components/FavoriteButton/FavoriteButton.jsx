import styles from './FavoriteButton.module.css';
import { useState } from 'react';
import cn from 'classnames';

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
		<div
			className={cn(styles['favorite-button'], {
				[styles['favorite-button_active']]: isFavorite
			})}
			onClick={handleButtonClick}
		>
			<div>
				<img
					src={isFavorite ? '/like active.svg' : '/like.svg'}
					alt="icon rating"
				/>
			</div>
			<div>{isFavorite ? 'В избранном' : 'В избранное'}</div>
		</div>
	);
}

export default FavoriteButton;
