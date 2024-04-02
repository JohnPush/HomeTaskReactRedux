import { Product } from '../../interfaces/film.interface';
import styles from './PageMovie.module.css';

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
                    <div>
                        <div className={styles.title}>{data.name}</div>
	                    <div className={styles.poster} style={{ backgroundImage: `url('${data.image}')`}}></div>
                    </div>
                    
	    		)}
	    	</Await>
	    </Suspense>
	</>;
}

