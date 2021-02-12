import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import loginImage from "../../assets/images/login.svg";
import "./Auth.scss";

const { REACT_APP_BASE_URL } = process.env;

const Login = ({ history }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(REACT_APP_BASE_URL + "/login", {
				username,
				password,
			});
			console.log(res);
		} catch (e) {
			console.error(e);
		}
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
									onChange={(e) => setUsername(e.target.value)}
									value={username}
									required="required"
									type="text"
									placeholder="username"
								/>
							</div>

							<div className="input-field mb-2">
								<input
									onChange={(e) => setPassword(e.target.value)}
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

export default Login;
