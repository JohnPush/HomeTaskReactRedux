import styles from './PageSearch.module.css';
import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import ListFilms from '../../components/ListFilms/ListFilms';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/film.interface';
import { ChangeEvent, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export function PageSearch() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState<string>();

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			});
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};
			
	return (
		<div className={styles['pageSearch']}>
			<Heading heading="Поиск" />
			<div className={styles['paragraph']}>
				Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
			</div>
			<Search onChange={updateFilter} />
			{error && <>{error}</>}
			{!isLoading && products.length > 0 && <ListFilms products={products} />}
			{isLoading && <>Ищем фильмы...</>}
			{!isLoading && products.length === 0 && 
			<div>
				<div className={styles['title']}>Упс... Ничего не найдено</div>
				<div className={styles['subtitle']}>Попробуйте изменить запрос или ввести более точное название фильма</div>
			</div>
			}
		</div>

	);
}

export default PageSearch;