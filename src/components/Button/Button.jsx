import './Button.css';

function Button({ textButton, onClick }) {
	return (
		<button className="button-base" onClick={onClick}>
			{textButton}
		</button>
	);
}

export default Button;
