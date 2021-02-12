import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "tachyons";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Chat from "./components/chat/Chat";

import "./App.scss";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Chat} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route render={() => <h1>404 not found</h1>} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
