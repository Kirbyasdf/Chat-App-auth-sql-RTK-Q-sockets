import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "tachyons";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Chat from "./components/chat/Chat";

import "./App.scss";

function App() {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={Chat} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route render={() => <h1>404 not found</h1>} />
			</Switch>
		</Fragment>
	);
}

export default App;
