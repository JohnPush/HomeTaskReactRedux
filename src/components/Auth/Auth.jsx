import styles from './Auth.module.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function Auth() {
	const { users, handleLogout } = useContext(UserContext);
	const loggedInUser = users.find((user) => user.isLogined === true);
	const loggedInUserName = loggedInUser ? loggedInUser.userName : '';
	return (
		<>
			{loggedInUser && (
				<div className={`${styles.menu__item} ${styles.loggedInUser}`}>
					{loggedInUserName}
					<div className={styles['icon']}>
						<img src="/User Rounded.svg" alt="icon user" />
					</div>
				</div>
			)}

			{loggedInUser ? (
				<div
					className={`${styles.menu__item} ${styles.logout}`}
					onClick={handleLogout}
				>
					Выйти
				</div>
			) : (
				<div className={`${styles.menu__item} ${styles.login}`}>
					Войти
					<div className={styles['icon']}>
						<img src="/Icon-login.svg" alt="icon login" />
					</div>
				</div>
			)}
		</>
	);
}

export default Auth;
