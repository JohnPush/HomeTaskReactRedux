import styles from './FavoriteButton.module.css';
import { MouseEvent } from 'react';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';

interface FavoriteButtonProps {
	id: number;
}

function FavoriteButton(props: FavoriteButtonProps) {
	const dispatch = useDispatch<AppDispath>();
	const loggedInProfile = useSelector((state: RootState) =>
    	state.user.profile?.find(profile => profile.isLogined)
  	);
	const isFavorite = loggedInProfile && loggedInProfile.favoriteMovies.includes(props.id);

	const toggleFavorite = (e: MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
    	if (loggedInProfile) {
      		if (isFavorite) {
        		dispatch(
          			userActions.removeFavorite({
            			userId: loggedInProfile.userId,
            			movieId: props.id
          			})
        		);
      		} else {
        		dispatch(
          			userActions.addFavorite({
            			userId: loggedInProfile.userId,
            			movieId: props.id
          			})
        		);
      		}
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
