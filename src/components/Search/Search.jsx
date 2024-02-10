import styles from './Search.module.css';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef } from 'react';
import { ARRAY_FILMS, formReducer } from './Search.state';

function Search({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, ARRAY_FILMS);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const inputRef = useRef();

	const focusError = (isValid) => {
		switch (true) {
			case !isValid.input:
				inputRef.current.focus();
				break;
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.input) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, values, onSubmit]);

	const onChange = (e) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value }
		});
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	return (
		<form className={styles['search']} onSubmit={handleSearchSubmit}>
			<div className={styles['containerHeading']}>
				<Heading heading="Поиск" />
				<Paragraph paragraph="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
			</div>
			<div className={styles['containerInputButton']}>
				<Input
					placeholder="Введите название"
					type="text"
					ref={inputRef}
					onChange={onChange}
					value={values.input}
					name="input"
					isValid={!isValid.input}
					showIconSearch={true}
				/>
				<Button textButton="Искать" />
			</div>
		</form>
	);
}

export default Search;
