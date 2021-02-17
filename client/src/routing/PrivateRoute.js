import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthenticateQuery } from "../services/api";

export const PrivateRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const { isLoading } = useAuthenticateQuery();
	return (
		<Route
			{...rest}
			render={(props) =>
				!isLoading && isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};
