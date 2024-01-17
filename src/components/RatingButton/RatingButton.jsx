import './RatingButton.css';

function RatingButton({ valueRating }) {
	const handleButtonClick = (e) => {
		e.stopPropagation();
	};

	return (
		<button className="rating-button" onClick={handleButtonClick}>
			<div className="rating-button__icon">
				<img src="/rating.svg" alt="icon rating" />
			</div>
			<div>{valueRating}</div>
		</button>
	);
}

export default RatingButton;
