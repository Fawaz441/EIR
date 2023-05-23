import AppRoutes from 'Routes';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<div className="min-h-screen bg-F8F9FA">
			<Toaster />
			<AppRoutes />
		</div>
	);
}

export default App;
