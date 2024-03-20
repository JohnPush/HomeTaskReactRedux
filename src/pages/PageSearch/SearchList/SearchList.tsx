import CardFilm from '../../../components/CardFilm/CardFilm';
import { Film } from '../../../interfaces/film.interface';


interface SearchListProps {
	films: Film["description"];
}

export function SearchList({ films }: SearchListProps) {
	return films.map(f => (
		<CardFilm
			key={f['#IMDB_ID']}
			id={f['#IMDB_ID']}
			name={f['#TITLE']}
			rating={f['#RANK']}
			image={f['#IMG_POSTER']}
		/>
	));
}