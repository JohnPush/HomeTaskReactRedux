import { useParams } from 'react-router';

export function PageMovie() {
	const { id } = useParams();
	return <>Movie - {id}</>;
}
