import styles from './PageLogin.module.css';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/user.slice';
import { RootState } from '../../store/store';
import { useNavigate  } from 'react-router-dom';



export function PageLogin() {
  	const [userName, setUserName] = useState('');
  	const dispatch = useDispatch();

  	const profiles = useSelector((state: RootState) => state.user.profile);
  	const isUserLoggedIn = profiles?.some(profile => profile.isLogined);
  	const navigate = useNavigate();
	  
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(login(userName));
	};

    	if (isUserLoggedIn) {
      		navigate('/');
    	}


	return (
		<div className={styles['pageLogin']} >
            <div className={styles['containerHeading']}>
				<Heading heading="Вход" />
			</div>
			<form className={styles['login']} onSubmit={handleSubmit}>
				<div className={styles['containerInputButton']}>
					<Input
						placeholder="Ваше имя"
						type="text"
						name="userName"
						value={userName}
           		 		onChange={(e) => setUserName(e.target.value)}
						showIconSearch={false}
					/>
					<Button textButton="Войти в профиль" type="submit"/>
				</div>
			</form>
		</div>
	);
}
