import { useParams } from 'react-router';

export function PageMovie() {
	const { id } = useParams<{ id: string }>();
	return <>Movie - {id}</>;
}
