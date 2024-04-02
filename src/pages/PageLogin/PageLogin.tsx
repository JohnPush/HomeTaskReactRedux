import { useNavigate } from 'react-router-dom';
import styles from './PageLogin.module.css';

import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';

import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export function PageLogin() {
    const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const { accessToken, loginErrorMessage } = useSelector((s: RootState) => s.user);

    useEffect(() => {
        if (accessToken) {
            navigate('/');
        }
    }, [accessToken, navigate]);

	const submit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(userActions.clearLoginError());
        const target = e.target as typeof e.target & { username: { value: string } };
        const { username } = target;
        await sendLogin(username.value);
    };

	const sendLogin = async (name: string) => {
        dispatch(login({ name }));
    };

	return (
		<div className={styles['pageLogin']}>
            <div className={styles['containerHeading']}>
				<Heading heading="Вход" />
			</div>
            {loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
			<form className={styles['login']} onSubmit={submit}>
			
			<div className={styles['containerInputButton']}>
				<Input
					// placeholder="Ваше имя"
					// type="text"
					// ref={userNameRef}
					// onChange={onChange}
					// value={values.userName}
					// name="userName"
					// isValid={!isValid.userName}
					// showIconSearch={false}

                    id="username"
                    name='username'
                    placeholder='Ваше имя'
				/>
				<Button textButton="Войти в профиль" />
			</div>
		</form>
		</div>
	);
}
