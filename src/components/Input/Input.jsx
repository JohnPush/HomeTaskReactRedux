import './Input.css';

function Input() {
	return (
		<div className="input">
			<div className="input__icon">
				<img src="/search-normal.svg" alt="иконка поиска" />
			</div>
			<input
				className="input__content"
				type="search"
				name="search"
				placeholder="Введите название"
			/>
		</div>
	);
}

export default Input;
