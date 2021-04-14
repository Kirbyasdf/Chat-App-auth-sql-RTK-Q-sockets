import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuthenticateQuery } from "./services/api";
import { logout } from "./redux/auth/authSlice";

import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Chat } from "./components/chat/Chat";
import { PrivateRoute } from "./routing/PrivateRoute";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmile, faImage } from "@fortawesome/free-regular-svg-icons";
import {
	faSpinner,
	faEllipsisV,
	faUserPlus,
	faSignOutAlt,
	faTrash,
	faCaretDown,
	faUpload,
	faTimes,
	faBell,
} from "@fortawesome/free-solid-svg-icons";
library.add(
	faSmile,
	faImage,
	faSpinner,
	faEllipsisV,
	faUserPlus,
	faSignOutAlt,
	faTrash,
	faCaretDown,
	faUpload,
	faTimes,
	faBell
);

export const App = () => {
	useAuthenticateQuery();
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<PrivateRoute path="/chat-home" component={Chat} />
			<Route render={() => <h1>404 not found</h1>} />
		</Switch>
	);
};

const HomePage = ({ history }) => {
	return (
		<>
			<h1>Home Page</h1>
			<span onClick={() => history.replace("login")}> login</span>
		</>
	);
};
