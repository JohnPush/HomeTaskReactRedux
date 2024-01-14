import './NavBar.css';

function NavBar() {
	return (
		<div className="nav-bar">
			<div className="nav-bar__logo">
				<img src="/Bookmark.svg" alt="icon bookmark" />
			</div>
			<div className="nav-bar__menu">
				<a className="menu__item menu__item_active" href="#">
					Поиск фильмов
				</a>
				<a className="menu__item" href="#">
					Мои фильмы
					<div className="menu__counter">X</div>
				</a>
				<a className="menu__item login" href="#">
					Войти
					<div className="icon-login">
						<img src="/Icon-login.svg" alt="icon login" />
					</div>
				</a>
			</div>
		</div>
	);
}

export default NavBar;
