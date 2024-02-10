import styles from './NavBar.module.css';
import cn from 'classnames';

function NavBar({ loggedInUser, showIconLogin, className, logoutUser }) {
	const handleLogout = () => {
		if (logoutUser) {
			logoutUser();
		}
	};

	return (
		<div className={styles['navBar']}>
			<div className={styles['logo']}>
				<img src="/Bookmark.svg" alt="logo" />
			</div>
			<div className={styles['menu']}>
				<div className={`${styles.menu__item} ${styles.menu__item_active}`}>
					Поиск фильмов
				</div>
				<div className={styles['menu__item']}>
					Мои фильмы
					<div className={styles['menu__counter']}>X</div>
				</div>
				{loggedInUser && (
					<div className={`${styles.menu__item} ${styles.loggedInUser}`}>
						{loggedInUser}
						<div className={styles['icon']}>
							<img src="/User Rounded.svg" alt="icon user" />
						</div>
					</div>
				)}
				<div
					className={cn(styles.menu__item, className, {
						[styles['login']]: !showIconLogin,
						[styles['logout']]: showIconLogin
					})}
					onClick={handleLogout}
				>
					{loggedInUser ? 'Выйти' : 'Войти'}
					{!showIconLogin && (
						<div className={styles['icon']}>
							<img src="/Icon-login.svg" alt="icon login" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default NavBar;
