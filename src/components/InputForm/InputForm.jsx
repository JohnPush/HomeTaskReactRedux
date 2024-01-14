import './InputForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

function InputForm({ onSubmit }) {
	const addCardFilm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};

	return (
		<div className="input-form" onSubmit={addCardFilm}>
			<Input />
			<Button
				textButton="Искать"
				onClick={() => {
					console.log('Нажали');
				}}
			/>
		</div>
	);
}

export default InputForm;
