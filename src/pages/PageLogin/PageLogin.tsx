import styles from './PageLogin.module.css';
import Heading from '../../components/Heading/Heading';
import Login from '../../components/Login/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate  } from 'react-router-dom';



export function PageLogin() {
  	const profiles = useSelector((state: RootState) => state.user.profile);
  	const isUserLoggedIn = profiles?.some(profile => profile.isLogined);
  	const navigate = useNavigate();

    if (isUserLoggedIn) {
    	navigate('/');
    }


	return (
		<div className={styles['pageLogin']} >
            <div className={styles['containerHeading']}>
				<Heading heading="Вход" />
				<Login />
			</div>
			{/* <form className={styles['login']} onSubmit={handleSubmit}>
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
			</form> */}
		</div>
	);
}
