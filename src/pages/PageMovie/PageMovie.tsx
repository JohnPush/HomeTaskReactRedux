import { Product } from '../../interfaces/film.interface';
import styles from './PageMovie.module.css';
import Rating from '../../components/Rating/Rating';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

export function PageMovie() {
	const data = useLoaderData() as { data: Product };

    return <>
        <Suspense fallback={'Загружаю...'}>
	    	<Await
	    		resolve={data.data}
	    	>
	    		{({ data }: { data: Product }) => (
                    <div className={styles['pageMovie']}>
                        <div className={styles.title}>{data.name}</div>
						<div className={styles.description}>
							<div className={styles.poster} >
	                    	    <img src={data.image} alt="poster" />
							</div>
							<div className={styles.description__text}>
                        		<div className={styles.ingredients}>{data.ingredients.join(', ')}</div>
								<div className={styles.description__variable}>
									<Rating valueRating={data.rating}/>
									<FavoriteButton id={data.id} />
								</div>
							</div>
						</div>
                    </div>
	    		)}
	    	</Await>
	    </Suspense>
	</>;
}

