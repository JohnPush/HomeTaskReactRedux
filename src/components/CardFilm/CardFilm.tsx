import { Link } from 'react-router-dom';
import styles from './CardFilm.module.css';
import RatingButton from '../RatingButton/RatingButton';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { cartActions } from '../../store/favoriteList.slice';
import cn from 'classnames';


interface CardFilmProps {
	id: number;
	name: string;
	description?: string;
	image: string;
	price: number;
	rating: number;
}

function CardFilm(props: CardFilmProps) {
	const dispatch = useDispatch<AppDispath>();
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const isFavorite = cartItems.some(item => item.id === props.id);

		const toggleFavorite = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		if (isFavorite) {
			dispatch(cartActions.delete(props.id));
		} else {
			dispatch(cartActions.add(props.id));
		}
	};



	return (
		<Link to={`/movie/${props.id}`} className={styles['link']}>
			<div key={props.id} className={styles['card-button']}>
				<RatingButton valueRating={props.rating} />
				<div className={styles['poster']}>
					<img src={props.image || ''} alt="poster" />
				</div>
				<div>{props.name || ''}</div>
				<div className={cn(styles['favorite-button'], {[styles['favorite-button_active']]: isFavorite})} onClick={toggleFavorite} >
					<div>
						<img
							src={isFavorite ? '/like active.svg' : '/like.svg'}
							alt="icon rating"
						/>
					</div>
					<div>{isFavorite ? 'В избранном' : 'В избранное'}</div>
				</div>
			</div>
		</Link>
	);
}

export default CardFilm;