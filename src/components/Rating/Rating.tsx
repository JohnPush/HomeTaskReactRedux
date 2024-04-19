import styles from './Rating.module.css';

interface RatingProps {
	valueRating: number;
}

function Rating({ valueRating }: RatingProps) {
	return (
		<div className={styles['rating']}>
			<div className={styles['rating__icon']}>
				<img src="/rating.svg" alt="icon rating" />
			</div>
			<div>{valueRating || ''}</div>
		</div>
	);
}

export default Rating;
