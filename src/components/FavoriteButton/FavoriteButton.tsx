import styles from './FavoriteButton.module.css';
import { MouseEvent } from 'react';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { cartActions } from '../../store/favoriteList.slice';

interface FavoriteButtonProps {
	id: number;
}

function FavoriteButton(props: FavoriteButtonProps) {
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
		<div className={cn(styles['favorite-button'], {[styles['favorite-button_active']]: isFavorite})} onClick={toggleFavorite} >
			<div className={styles['icon']}>
				<img src={isFavorite ? '/like active.svg' : '/like.svg'} alt="icon rating" />
			</div>
			<div>{isFavorite ? 'В избранном' : 'В избранное'}</div>
		</div>
	);
}

export default FavoriteButton;
