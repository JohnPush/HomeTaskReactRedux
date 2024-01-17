import './InputForm.css';

function InputForm({ onSubmit, placeholderSearch, onClick, textButton }) {
	const addCardFilm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};

	return (
		<div className="input-form_search" onSubmit={addCardFilm}>
			<div className="input_search">
				<div className="input__icon">
					<img src="/search-normal.svg" alt="иконка поиска" />
				</div>
				<input
					className="input__content_search"
					type="search"
					name="search"
					placeholder={placeholderSearch}
				/>
			</div>

			<button className="button_search" onClick={onClick}>
				{textButton}
			</button>
		</div>
	);
}

export default InputForm;
