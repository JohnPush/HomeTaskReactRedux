import styles from './NavBar.module.css';
import Auth from '../Auth/Auth';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function NavBar() {
	const { users } = useContext(UserContext);
	const loggedInUser = users.find((user) => user.isLogined === true);
	const loggedInUserName = loggedInUser ? loggedInUser.userName : '';
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
				<Auth loggedInUser={loggedInUserName} />
			</div>
		</div>
	);
}

export default NavBar;
