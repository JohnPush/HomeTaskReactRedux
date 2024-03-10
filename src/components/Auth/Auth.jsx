import styles from './Auth.module.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

function Auth() {
	const { getCurrentUser, handleLogout } = useContext(UserContext);
	const { loggedInUser, loggedInUserName } = getCurrentUser();

	return (
		<>
			{loggedInUser && (
				<div
					className={({ isActive }) =>
						cn(styles['link'], {
							[styles.active]: isActive
						})
					}
				>
					{loggedInUserName}
					<div className={styles['icon']}>
						<img src="/User Rounded.svg" alt="icon user" />
					</div>
				</div>
			)}

			{loggedInUser ? (
				<div
					className={({ isActive }) =>
						cn(styles['link'], {
							[styles.active]: isActive
						})
					}
					onClick={handleLogout}
				>
					Выйти
				</div>
			) : (
				<NavLink
					to="/login"
					className={({ isActive }) =>
						cn(styles['link'], {
							[styles.active]: isActive
						})
					}
				>
					Войти
					<div className={styles['icon']}>
						<img src="/Icon-login.svg" alt="icon login" />
					</div>
				</NavLink>
			)}
		</>
	);
}

export default Auth;
