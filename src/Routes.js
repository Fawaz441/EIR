import Book from 'pages/Book';
import Home from 'pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppRoutes = () => {
	const router = createBrowserRouter([{ path: '/', element: <Home /> }, {path:'/books/:id', element:<Book/>}]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
