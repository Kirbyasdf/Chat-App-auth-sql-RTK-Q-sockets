import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useLoginMutation, useAuthenticateQuery } from "../../services/api";
import loginImage from "../../assets/images/login.svg";
import "./Auth.scss";
import AuthService from "../../services/authService";

export const Login = ({ history }) => {
	const [form, setForm] = useState({ username: "john", password: "12341234" });
	// const [login] = useLoginMutation();
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const { username, password } = form;

	useEffect(() => {
		if (isAuthenticated) {
			return history.replace("/private");
		}
	}, [isAuthenticated]);

	// const submitForm = async (e) => {
	// 	e.preventDefault();
	// 	login(form);
	// };

	const submitForm = async (e) => {
		e.preventDefault();
		dispatch(login({ username, password }));
	};

	return (
		<div id="auth-container">
			<div id="auth-card">
				<div className="card-shadow">
					<div id="image-section">
						<img src={loginImage} alt="Login" />
					</div>
					<div id="form-section">
						<h2>Welcome back</h2>

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

							<button>LOGIN</button>
						</form>

						<p className="ml4">
							Don't have an account? <Link to="/register">Register</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
