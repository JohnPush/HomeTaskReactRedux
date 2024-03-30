import styles from './Search.module.css';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef, ChangeEvent, FormEvent } from 'react';
import { INITIAL_SEARCH_FORM_STATE, formReducer, SearchFormState } from './Search.state';

interface SearchProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ onChange }: SearchProps) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_SEARCH_FORM_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const inputRef = useRef<HTMLInputElement>(null);

	const focusError = (isValid: SearchFormState['isValid']) => {
		switch (true) {
			case !isValid.searchField:
				inputRef.current?.focus();
				break;
		}
	};

	useEffect(() => {
		let timerId: NodeJS.Timeout;
		if (!isValid.searchField) {
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
	}, [isFormReadyToSubmit, values]);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e);
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value }
		});
	};

	const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const onSubmit = (values: SearchFormState['values']) => {
		console.log('Форма отправлена:', values);
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
					onChange={onChangeHandler}
					value={values.searchField}
					name="searchField"
					isValid={!isValid.searchField}
					showIconSearch={true}
				/>
				<Button textButton="Искать" />
			</div>
		</form>
	);
}

export default Search;
