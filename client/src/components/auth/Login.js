import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../../services/api";
import loginImage from "../../assets/images/login.svg";
import "./Auth.scss";

export const Login = ({ history }) => {
	const [form, setForm] = useState({ username: "test", password: "123456" });
	const [login, { isLoading }] = useLoginMutation();
	const { isAuthenticated } = useSelector((state) => state.auth);
	const { password, username } = form;

	isAuthenticated && <Redirect to="/private" />;

	const submitForm = async (e) => {
		e.preventDefault();
		const res = await login(form);
		// if you want to create an error , simply send a 1 character long password which the validators on the sever will reject
		!res.error && res.data.success && history.push("/private");
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
