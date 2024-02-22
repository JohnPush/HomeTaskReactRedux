import styles from './Auth.module.css';
// import { useContext } from 'react';
// import { UserContext } from '../../context/user.context';

function Auth({ loggedInUser, users, setUsers }) {
	const handleLogout = () => {
		setUsers(users.map((user) => ({ ...user, isLogined: false })));
	};
	return (
		<>
			{loggedInUser && (
				<div className={`${styles.menu__item} ${styles.loggedInUser}`}>
					{loggedInUser}
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
