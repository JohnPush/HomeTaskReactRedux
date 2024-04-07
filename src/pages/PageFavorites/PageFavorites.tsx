import styles from './PageFavorites.module.css';
import Heading from '../../components/Heading/Heading';
import ListFilms from '../../components/ListFilms/ListFilms';
import { RootState } from '../../store/store';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/film.interface';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export function PageFavorites() {
	const [cartProducts, setCardProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCardProducts(res);
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);

	return (
		<div className={styles['pageFavorites']}>
			<Heading heading={'Избранное'}/>
			<ListFilms products={cartProducts} />
		</div>
	);
}