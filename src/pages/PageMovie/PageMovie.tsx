import { Film } from '../../interfaces/film.interface';
import styles from './PageMovie.module.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';

import { useParams } from 'react-router-dom';


export function PageMovie() {
    const { id } = useParams();

    const [movieData, setMovieData] = useState<Film | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

	    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const { data } = await axios.get(`${PREFIX}/?q=${id}`);
                setMovieData(data);
                setLoading(false);
            } catch (error) {
                setError('Ошибка при загрузке данных');
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [id]);

	   if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;
    if (!movieData) return null;

    const movie = movieData.description[0];
    
    return <>
	<div className={styles.title}>{movie['#TITLE']}</div>
	<div className={styles.poster} style={{ backgroundImage: `url('${movie['#IMG_POSTER']}')`}}></div>
	</>;
}

