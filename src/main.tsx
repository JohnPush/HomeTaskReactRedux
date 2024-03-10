import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout/Layout';
import { PageSearch } from './pages/PageSearch/PageSearch';
import { PageLogin } from './pages/PageLogin/PageLogin';
import { PageMovie } from './pages/PageMovie/PageMovie';
import { PageFavorites } from './pages/PageFavorites/PageFavorites';
import { Error } from './pages/Error/Error';
import { UserProvider } from './context/user.context';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <PageSearch />
			},
			{
				path: '/login',
				element: <PageLogin />
			},
			{
				path: '/movie/:id',
				element: <PageMovie />
			},
			{
				path: '/favorites',
				element: <PageFavorites />
			}
		]
	},
	{
		path: '*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</React.StrictMode>
);
