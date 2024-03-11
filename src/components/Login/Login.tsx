import styles from './Login.module.css';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useContext, useEffect, useReducer, useRef, ChangeEvent, FormEvent } from 'react';
import { UserContext } from '../../context/user.context';
import { ARRAY_USERS, formReducer } from './Login.state';

function Login() {
	const { addUser } = useContext(UserContext);
	const [formState, dispatchForm] = useReducer(formReducer, ARRAY_USERS);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const userNameRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		let timerId: any;
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
			addUser(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, values]);

	const focusError = (isValid: any) => {
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
