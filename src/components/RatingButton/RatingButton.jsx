import './RatingButton.css';

function RatingButton({ valueRating }) {
	console.log('valueRating:', valueRating);
	return (
		<button className="rating-button">
			<div className="rating-button__icon">
				<img src="/rating.svg" alt="icon rating" />
			</div>
			<div>{valueRating}</div>
		</button>
	);
}

export default RatingButton;
