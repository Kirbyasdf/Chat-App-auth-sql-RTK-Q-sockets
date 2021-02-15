import { Link, Redirect } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

export const Chat = () => {
	const { isAuthenticated } = useSelector((state) => state.auth);

	isAuthenticated && <Redirect to="/private" />;

	return (
		<Fragment>
			<h1>
				You are <span style={{ color: "red" }}>not</span> Authenticated
			</h1>
			<Link to="/login">Login</Link>;
		</Fragment>
	);
};

