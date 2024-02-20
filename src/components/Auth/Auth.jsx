import styles from './Auth.module.css';

function Auth({ loggedInUser, logoutUser }) {
	const handleLogout = () => {
		if (logoutUser) {
			logoutUser();
		}
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
