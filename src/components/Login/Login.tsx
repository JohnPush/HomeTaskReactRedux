import styles from './Login.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef, ChangeEvent, FormEvent } from 'react';
import { INITIAL_LOGIN_FORM_STATE, formReducer } from './Login.state';
import { login } from '../../store/user.slice';
import { useDispatch } from 'react-redux';



function Login() {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_LOGIN_FORM_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const userNameRef = useRef<HTMLInputElement>(null);
	
  	const dispatch = useDispatch();


	useEffect(() => {
		let timerId: NodeJS.Timeout;
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
			dispatch(login(values.userName));
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, values]);

	const focusError = (isValid: { userName: boolean }) => {
		if (!isValid.userName) {
			userNameRef.current?.focus();
		}
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value }
		});
	};

	const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	return (
		<form className={styles['login']} onSubmit={handleSubmitLogin}>
			<div className={styles['containerInputButton']}>
				<Input
					placeholder="Ваше имя"
					type="text"
					ref={userNameRef}
					onChange={onChange}
					value={values.userName}
					name="userName"
					isValid={isValid.userName}
					showIconSearch={false}
				/>
				<Button textButton="Войти в профиль" />
			</div>
		</form>
	);
}

export default Login;
