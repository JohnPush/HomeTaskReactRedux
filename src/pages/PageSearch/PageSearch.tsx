import styles from './PageSearch.module.css';
import Search from '../../components/Search/Search';
// import CardFilm from '../../components/CardFilm/CardFilm';
import { useEffect, useState } from 'react';
import { PREFIX } from '../../helpers/API';
import { Film } from '../../interfaces/film.interface';
import axios, { AxiosError } from 'axios';
import { SearchList } from './SearchList/SearchList';




export function PageSearch() {
	const [films, setFilms] = useState<Film[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();


	const getMenu = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
			const res = await axios.get(`${PREFIX}/?q=Avengers%3A%20Endgame`);
			const data = res.data;
        	setFilms(data.description);
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
			{/* <div>
				{!isLoading && films.map(f => (
					<CardFilm
						key={f['#IMDB_ID']}
						id={f['#IMDB_ID']}
						name={f['#TITLE']}
						rating={f['#RANK']}
						image={f['#IMG_POSTER']}
					/>
				))}
				{isLoading && <>Ищем фильмы...</>}
			</div> */}
			<div>
				{error && <>{error}</>}
				{!isLoading && <SearchList films={films} />}
				{isLoading && <>Ищем фильмы...</>}
			</div>
		</div>

	);
}