import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";

const Chat = () => (
	<Fragment>
		<h1>
			You are <span style={{ color: "red" }}>not</span> Authenticated
		</h1>
		<Link to="/login">Login</Link>;
	</Fragment>
);

export default Chat;
