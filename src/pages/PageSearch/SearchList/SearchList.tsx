import CardFilm from '../../../components/CardFilm/CardFilm';
import { Product } from '../../../interfaces/film.interface';
import styles from './SearchList.module.css';

interface SearchListProps {
	products: Product[];
}

export function SearchList({ products }: SearchListProps) {
	return <div className={styles.wrapper}>{products.map(f => (
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