import styles from './Login.module.css';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useContext, useEffect, useReducer, useRef } from 'react';
import { UserContext } from '../../context/user.context';
import { ARRAY_USERS, formReducer } from './Login.state';

function Login() {
	const { users, setUsers } = useContext(UserContext);
	const [formState, dispatchForm] = useReducer(formReducer, ARRAY_USERS);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const userNameRef = useRef();

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
			addUser(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, values]);

	const focusError = (isValid) => {
		if (!isValid.userName) {
			userNameRef.current.focus();
		}
	};

	const onChange = (e) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value }
		});
	};

	const addUser = (user) => {
		const existUser = users.find((u) => u.userName === user.userName);
		if (existUser) {
			setUsers((oldUsers) =>
				oldUsers.map((u) =>
					u.userName === user.userName ? { ...u, isLogined: true } : u
				)
			);
		} else {
			setUsers([
				...users,
				{
					userName: user.userName,
					isLogined: true,
					id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1
				}
			]);
		}
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
