import styles from './PageSearch.module.css';
import Search from '../../components/Search/Search';
import { ChangeEvent, useEffect, useState } from 'react';
import { PREFIX } from '../../helpers/API';
import { Film } from '../../interfaces/film.interface';
import axios, { AxiosError } from 'axios';
import { SearchList } from './SearchList/SearchList';




export function PageSearch() {
	const [films, setFilms] = useState<Film["description"]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState<string>();

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const getMenu = async (name?: string) => {
		try {
        setIsLoading(true);
        const url = name ? `${PREFIX}/?q=${name}` : `${PREFIX}/?q=`;
        const res = await axios.get(url);
        const data = res.data.description;
        setFilms(data);
        setIsLoading(false);
		} catch (e) {
			console.error(e);
      		setFilms([]);
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
			<div>
				<Search onChange={updateFilter} />
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && films.length > 0 && <SearchList films={films} />}
				{isLoading && <>Ищем фильмы...</>}
				{!isLoading && films.length === 0 && 
				<div>
				<div className={styles['title']}>Упс... Ничего не найдено</div>
				<div className={styles['subtitle']}>Попробуйте изменить запрос или ввести более точное название фильма</div>
				</div>
				}
			</div>
		</div>

	);
}

export default PageSearch;