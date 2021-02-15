import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthenticateQuery } from "./services/api";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import Chat from "./components/chat/Chat";
import { PrivateRoute } from "./routing/PrivateRoute";
import { Fragment } from "react";

import logout from "./redux/auth/authSlice";

export const App = () => {
	/// old style
	// useEffect(() => {
	// 	const token = localStorage.getItem("token");
	// 	if (token) {
	// 		dispatch(LoadUser(token));
	// 	}
	// });

	//cant figure out the new way

	useAuthenticateQuery();
	return (
		<Switch>
			<Route exact path="/" component={Chat} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<PrivateRoute path="/private" component={PrivatePage} />
			<Route render={() => <h1>404 not found</h1>} />
		</Switch>
	);
};

const PrivatePage = () => (
	<Fragment>
		<h1>you are logged in</h1>
		<button onClick={() => logout()}>logout </button>
	</Fragment>
);
