import styles from './PageFavorites.module.css';
import Heading from '../../components/Heading/Heading';
import ListFilms from '../../components/ListFilms/ListFilms';
// import { RootState } from '../../store/store';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/film.interface';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { selectUserProfile } from '../../store/user.slice';


export function PageFavorites() {
    const profiles = useSelector(selectUserProfile);


	const [cartProducts, setCardProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadFavorites = async () => {
            const favoriteProducts: Product[] = [];
            for (const profile of profiles || []) {
                const favoriteIds = profile.favoriteMovies || [];
                for (const id of favoriteIds) {
                    try {
                        const response = await axios.get<Product>(`${PREFIX}/products/${id}`);
                        favoriteProducts.push(response.data);
                    } catch (error) {
                        console.error(`запрос не прошел для ${id}: ${error}`);
                    }
                }
            }
            setCardProducts(favoriteProducts);
        };

        loadFavorites();
    }, [profiles, dispatch]);

	return (
		<div className={styles['pageFavorites']}>
			<Heading heading={'Избранное'}/>
			<ListFilms products={cartProducts} />
		</div>
	);
}