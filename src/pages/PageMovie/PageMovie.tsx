import { useLoaderData } from 'react-router-dom';
import { Film } from '../../interfaces/film.interface';

export function PageMovie() {
    const data = useLoaderData() as Film;
    const movie = data.description[0];
    
    return <>Movie - {movie['#TITLE']}</>;
}

