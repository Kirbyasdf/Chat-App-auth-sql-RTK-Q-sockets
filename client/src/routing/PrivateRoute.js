import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthenticateQuery } from "../services/api";

export const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const { auth } = useSelector((state) => state);

	const { isLoading } = useAuthenticateQuery();
	console.log(isAuthenticated);
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoading && !isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};
