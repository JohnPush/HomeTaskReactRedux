import { useParams } from 'react-router';

export function PageMovie() {
	const { id } = useParams<{ id: string }>(); //почему id: number ошибка?
	return <>Movie - {id}</>;
}
