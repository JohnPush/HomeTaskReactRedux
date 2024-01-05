import './App.css';
import Heading from './components/Heading/Heading';
import Body from './components/Body/Body';
import Button from './components/Button/Button';

function App() {
	const data = [
		{
			heading: 'поиск',
			buttonBase: 'искать',
			body: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		},
		{
			heading: 'вход',
			buttonBase: 'войти в профиль'
		},
		{
			heading: 'избранное'
		}
	];

	return (
		<>
			<Heading heading={data[0].heading} />
			<Body body={data[0].body} />
			<Button buttonBase={data[0].buttonBase} />
		</>
	);
}

export default App;
