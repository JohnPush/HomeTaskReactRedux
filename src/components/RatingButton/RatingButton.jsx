import styles from './RatingButton.module.css';

function RatingButton({ valueRating }) {
	return (
		<div className={styles['rating-button']}>
			<div className={styles['rating-button__icon']}>
				<img src="/rating.svg" alt="icon rating" />
			</div>
			<div>{valueRating}</div>
		</div>
	);
}

export default RatingButton;
