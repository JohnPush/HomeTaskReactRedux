import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { Layout } from './layouts/Layout/Layout.tsx';
import { PageLogin } from './pages/PageLogin/PageLogin.tsx';
import { PageMovie } from './pages/PageMovie/PageMovie.tsx';
import { PageFavorites } from './pages/PageFavorites/PageFavorites.tsx';
import { Error as ErrorPage } from './pages/Error/Error.tsx';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';

const PageSearch = lazy(() => import('./pages/PageSearch/PageSearch'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth><Layout /></RequireAuth>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><PageSearch /></Suspense>
			},
			{
				path: '/favorites',
				element: <PageFavorites />
			},
			{
				path: '/movie/:id',
				element: <PageMovie />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
							}, 2000);
						})
					});
				}
			},
			
		]
	},
	{
		path: '/',
		element: <Layout />,
		children: [
						{
				path: '/login',
				element: <PageLogin />
			},
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
	</React.StrictMode>
);
