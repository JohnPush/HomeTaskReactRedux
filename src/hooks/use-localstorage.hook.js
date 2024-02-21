import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
	const [data, setData] = useState(() => {
		const storedData = localStorage.getItem(key);
		return storedData ? JSON.parse(storedData) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(data));
	}, [key, data]);

	return [data, setData];
}
