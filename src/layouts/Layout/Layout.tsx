import styles from './Layout.module.css';
import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../store/user.slice';


export function Layout() {
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const profiles = useSelector((state: RootState) => state.user.profile);
  	const dispatch = useDispatch();

    	const handleLogout = () => {
    	dispatch(logout());
  	};

	return (
		<div className={styles['layout']}>
			<div className={styles['navBar']}>
				<div className={styles['logo']}>
					<img src="/Bookmark.svg" alt="logo" />
				</div>
				<div className={styles['menu']}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
							})
						}
					>
						Поиск фильмов
					</NavLink>

					<NavLink
						to="/favorites"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
							})
						}
					>
						Мои фильмы
						<div className={styles['menu__counter']}>{cartItems.length}</div>
					</NavLink>
					{profiles && profiles.some(profile => profile.isLogined) ? (
						<div>
							{profiles && profiles.length > 0 && profiles.some(profile => profile.isLogined) && (
  								<div className={styles.link}>
  									{profiles.find(profile => profile.isLogined)?.userName}
  								  	<div className={styles.icon}>
  								    	<img src="/User Rounded.svg" alt="icon user" />
  								  	</div>
  								</div>
							)}
							<div className={cn(styles['link'])} onClick={handleLogout}>
							Выйти
							</div>
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
				</div>
			</div>
			<Outlet />
		</div>
	);
}
