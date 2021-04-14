import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../redux/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

export const Navbar = () => {
	const stateAuth = useSelector((state) => state.auth);
	const { user } = stateAuth;
	const dispatch = useDispatch();
	const [showProfileOptions, setShowProfileOptions] = useState(false);

	return (
		<div id="navbar">
			<h2>Chat-App</h2>
			<div onClick={() => setShowProfileOptions(!showProfileOptions)} id="profile-menu">
				<img
					width="40"
					hieght="40"
					src={user.avatar || "http://cdn.onlinewebfonts.com/svg/img_258083.png"}
					alt="Avatar"
				/>
				<p>Welcome {user.username.toUpperCase()}</p>
				<FontAwesomeIcon icon="caret-down" className="fa-icon" />
				{showProfileOptions && (
					<div id="profile-options">
						<p>Update Profile</p>
						<p onClick={() => dispatch(logout())}>Logout</p>
					</div>
				)}
			</div>
		</div>
	);
};
