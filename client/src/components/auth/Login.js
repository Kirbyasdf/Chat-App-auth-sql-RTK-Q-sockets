import React, { useState } from "react";
import loginImage from "../../assets/images/login.svg";
import { Link } from "react-router-dom";

import "./Auth.scss";

const Login = ({ history }) => {
	return (
		<div id="auth-container">
			<div id="auth-card">
				<div className="card-shadow">
					<div id="image-section">
						<img src={loginImage} alt="Login" />
					</div>

					<div id="form-section">
						<h2>Welcome back</h2>

						<form>
							<div className="input-field mb-1">
								<input
									required="required"
									type="text"
									placeholder="username"
								/>
							</div>

							<div className="input-field mb-2">
								<input
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
