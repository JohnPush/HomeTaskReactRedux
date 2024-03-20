import styles from './PageSearch.module.css';
import Search from '../../components/Search/Search';
import { useEffect, useState } from 'react';
import { PREFIX } from '../../helpers/API';
import { Film } from '../../interfaces/film.interface';
import axios, { AxiosError } from 'axios';
import { SearchList } from './SearchList/SearchList';




export function PageSearch() {
	const [films, setFilms] = useState<Film["description"]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();


	const getMenu = async () => {
		try {
			setIsLoading(true);
			const res = await axios.get<Film>(`${PREFIX}/?q=Avengers%3A%20Endgame`);
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

	useEffect(() => {
		getMenu();
	}, []);
			
	return (
		<div className={styles['pageSearch']}>
			<div>
				<Search />
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && <SearchList films={films} />}
				{isLoading && <>Ищем фильмы...</>}
			</div>
		</div>

	);
}

export default PageSearch;