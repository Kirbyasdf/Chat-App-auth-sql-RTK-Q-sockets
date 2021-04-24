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
	const [form, setForm] = useState({
		username: "",
		newPassword: "",
		confirmPassword: "",
		currentPassword: "",
	});
	const { username, newPassword, confirmPassword, currentPassword } = form;

	const submitForm = (e) => {
		console.log("asdf");
		if (newPassword != confirmPassword) {
			alert("New Passwords don't match");
			setForm({
				...form,
				newPassword: "",
				confirmPassword: "",
			});
			return;
		}
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
												newPassword: e.target.value,
											})
										}
										value={newPassword}
										required="required"
										type="password"
										placeholder="New Password"
									/>
								</div>
								<div
									className="input-field mb-3"
									style={{ marginBottom: "1em" }}
								>
									<input
										onChange={(e) =>
											setForm({
												...form,
												confirmPassword: e.target.value,
											})
										}
										value={confirmPassword}
										required="required"
										type="password"
										placeholder="Confirm New Password"
									/>
								</div>
								<div className="input-field mb-4">
									<input
										onChange={(e) =>
											setForm({
												...form,
												currentPassword: e.target.value,
											})
										}
										value={currentPassword}
										required="required"
										type="password"
										placeholder="Current Password"
									/>
								</div>
								<div style={{ marginTop: "1em" }}>
									Forgot Password? Email{" "}
									<a className="grow b  hover-purple light-purple">
										Help@chatapp.com
									</a>
								</div>
							</form>
						</Fragment>

						<Fragment key="footer">
							{" "}
							<button className="btn-success" onClick={submitForm}>
								Update
							</button>
						</Fragment>
					</Modal>
				)}
			</div>
		</div>
	);
};
