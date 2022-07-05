import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import RouterApp from './AllRoutes';
const App = () => {
	return (
		<Router>
			<RouterApp />
		</Router>
	);
}

export default App;
