import styles from './Login.module.css';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef } from 'react';
import { ARRAY_USERS, formReducer } from './Login.state';

function Login({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, ARRAY_USERS);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const userNameRef = useRef();

	const focusError = (isValid) => {
		switch (true) {
			case !isValid.userName:
				userNameRef.current.focus();
				break;
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.userName) {
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

	const handleSubmitLogin = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	return (
		<form className={styles['login']} onSubmit={handleSubmitLogin}>
			<div className={styles['containerHeading']}>
				<Heading heading="Вход" />
			</div>
			<div className={styles['containerInputButton']}>
				<Input
					placeholder="Ваше имя"
					type="text"
					ref={userNameRef}
					onChange={onChange}
					value={values.userName}
					name="userName"
					isValid={!isValid.userName}
					showIconSearch={false}
				/>
				<Button textButton="Войти в профиль" />
			</div>
		</form>
	);
}

export default Login;
