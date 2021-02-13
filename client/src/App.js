import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useLoadUserQuery } from "./services/api";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Chat from "./components/chat/Chat";

export const App = () => {
	useEffect(() => {
		const token = localStorage.getItem("token");
		autheticate();
	}, []);

	const autheticate = () => {
		const res = useLoadUserQuery();
		console.log(res);
	};

	return (
		<Switch>
			<Route exact path="/" component={Chat} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route render={() => <h1>404 not found</h1>} />
		</Switch>
	);
};
