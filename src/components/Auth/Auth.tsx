import styles from './Auth.module.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context.tsx';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

function Auth() {
	const userContext = useContext(UserContext);
	const { getCurrentUser, handleLogout } = userContext;
	const { loggedInUser, loggedInUserName } = getCurrentUser();

	return (
		<>
			{loggedInUser && (
				<div
					className={cn(styles['link'])}
				>
					{loggedInUserName}
					<div className={styles['icon']}>
						<img src="/User Rounded.svg" alt="icon user" />
					</div>
				</div>
			)}

			{loggedInUser ? (
				<div
					className={cn(styles['link'])}
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
