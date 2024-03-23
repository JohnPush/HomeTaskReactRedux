import { useLoaderData } from 'react-router-dom';
import { Film } from '../../interfaces/film.interface';
import styles from './PageMovie.module.css';


export function PageMovie() {
    const data = useLoaderData() as Film;
    const movie = data.description[0];
    
    return <>
	<div className={styles.title}>{movie['#TITLE']}</div>
	<div className={styles.poster} style={{ backgroundImage: `url('${movie['#IMG_POSTER']}')`}}></div>
	</>;
}

