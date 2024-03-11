import styles from './RatingButton.module.css';

interface RatingButtonProps {
	valueRating: number;
}

function RatingButton({ valueRating }: RatingButtonProps) {
	return (
		<div className={styles['rating-button']}>
			<div className={styles['rating-button__icon']}>
				<img src="/rating.svg" alt="icon rating" />
			</div>
			<div>{valueRating || ''}</div>
		</div>
	);
}

export default RatingButton;
