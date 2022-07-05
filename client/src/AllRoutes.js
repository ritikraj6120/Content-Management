import { Switch, Route } from "react-router-dom";
import Signin from "./components/user/Signin";

const RouterApp = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Signin />
			</Route>

		</Switch>
	);
}

export default RouterApp;