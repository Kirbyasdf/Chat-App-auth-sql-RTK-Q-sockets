import { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../redux/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "../../../modal/Modal";
import "./Navbar.scss";

export const Navbar = () => {
	const stateAuth = useSelector((state) => state.auth);
	const { user } = stateAuth;
	const dispatch = useDispatch();
	const [showProfileOptions, setShowProfileOptions] = useState(false);
	const [showProfileModal, setShowProfileModal] = useState(false);
	const [form, setForm] = useState({ username: "", password: "" });
	const { password, username } = form;

	const submitForm = (e) => {
		e.preventDefault();
	};

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
						<p onClick={() => setShowProfileModal(true)}>Update Profile</p>
						<p onClick={() => dispatch(logout())}>Logout</p>
					</div>
				)}

				{showProfileModal && (
					<Modal closeModal={() => setShowProfileModal(false)}>
						<Fragment key="header">
							<h3 className="m-0">Update Profile</h3>
						</Fragment>

						<Fragment key="body">
							{" "}
							<form onSubmit={submitForm}>
								<div className="input-field mb-1">
									<input
										onChange={(e) =>
											setForm({
												...form,
												username: e.target.value,
											})
										}
										value={username}
										required="required"
										type="text"
										placeholder="username"
									/>
								</div>
								<div className="input-field mb-2">
									<input
										onChange={(e) =>
											setForm({
												...form,
												password: e.target.value,
											})
										}
										value={password}
										required="required"
										type="password"
										placeholder="password"
									/>
								</div>
							</form>
						</Fragment>

						<Fragment key="footer">
							{" "}
							<button className="btn-success">Update</button>
						</Fragment>
					</Modal>
				)}
			</div>
		</div>
	);
};
