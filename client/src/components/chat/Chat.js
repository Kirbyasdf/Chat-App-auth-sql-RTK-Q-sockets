import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Chat = () => {
	const { isAuthenticated } = useSelector((state) => state.auth);

	!isAuthenticated && <Redirect to="/login" />;

	return <h1>Chat Screen</h1>;
};

export default Chat;
