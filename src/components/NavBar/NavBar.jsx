import styles from './NavBar.module.css';
import Auth from '../Auth/Auth';

function NavBar({ loggedInUser, users, setUsers }) {
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
				<Auth loggedInUser={loggedInUser} users={users} setUsers={setUsers} />
			</div>
		</div>
	);
}

export default NavBar;
