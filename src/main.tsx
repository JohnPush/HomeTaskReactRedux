import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout/Layout.tsx';
import { PageSearch } from './pages/PageSearch/PageSearch.tsx';
import { PageLogin } from './pages/PageLogin/PageLogin.tsx';
import { PageMovie } from './pages/PageMovie/PageMovie.tsx';
import { PageFavorites } from './pages/PageFavorites/PageFavorites.tsx';
import { Error } from './pages/Error/Error.tsx';
import { UserProvider } from './context/user.context.tsx';

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
