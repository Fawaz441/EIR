import Home from 'pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppRoutes = () => {
	const router = createBrowserRouter([{ path: '/', element: <Home /> }]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
