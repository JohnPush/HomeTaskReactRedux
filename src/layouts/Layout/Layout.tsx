import styles from './Layout.module.css';
import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Layout() {
	const cartItems = useSelector((state: RootState) => state.cart.items);

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
					{/* <Auth /> */}
				</div>
			</div>

			<div>
				<Outlet />
			</div>
		</div>
	);
}
