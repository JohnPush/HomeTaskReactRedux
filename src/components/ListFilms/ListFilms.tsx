import CardFilm from '../CardFilm/CardFilm';
import { Product } from '../../interfaces/film.interface';
import styles from './ListFilms.module.css';

interface ListFilmsProps {
	products: Product[];
}

export function ListFilms({ products }: ListFilmsProps) {
	return <div className={styles.listFilms}>{products.map(f => (
		<CardFilm
			key={f.id}
			id={f.id}
			name={f.name}
			description={f.ingredients.join(', ')}
			rating={f.rating}
			price={f.price}
			image={f.image}
		/>
	))}
	</div>;
}

export default ListFilms;
