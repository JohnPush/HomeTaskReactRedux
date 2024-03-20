import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout/Layout.tsx';
import { PageLogin } from './pages/PageLogin/PageLogin.tsx';
import { PageMovie } from './pages/PageMovie/PageMovie.tsx';
import { PageFavorites } from './pages/PageFavorites/PageFavorites.tsx';
import { Error as ErrorPage } from './pages/Error/Error.tsx';
import { UserProvider } from './context/user.context.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';

const PageSearch = lazy(() => import('./pages/PageSearch/PageSearch'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><PageSearch /></Suspense>
			},
			{
				path: '/login',
				element: <PageLogin />
			},
			{
				path: '/movie/:id',
				element: <PageMovie />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					await new Promise<void>((resolve) => {
						setTimeout(() => {
							resolve();
						}, 2000);
					});
					const { data } = await axios.get(`${PREFIX}/?q=${params.id}`);
					return data;
				}
			},
			{
				path: '/favorites',
				element: <PageFavorites />
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</React.StrictMode>
);
