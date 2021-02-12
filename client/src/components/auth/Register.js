import React, { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../../assets/images/register.svg";

import "./Auth.scss";

const Register = () => {
	return (
		<div id="auth-container">
			<div id="auth-card">
				<div className="card-shadow">
					<div id="image-section">
						<img src={registerImage} alt="Register" />
					</div>

					<div id="form-section">
						<h2>Welcome back</h2>
						<form>
							<div className="input-field mb-1">
								<input
									required="required"
									type="text"
									placeholder="Email"
								/>
							</div>
							<div className="input-field mb-1">
								<input
									required="required"
									type="text"
									placeholder="Email"
								/>
							</div>
							<div className="input-field mb-1">
								<input
									required="required"
									type="text"
									placeholder="Email"
								/>
							</div>
							<div className="input-field mb-1">
								<input
									required="required"
									type="text"
									placeholder="Email"
								/>
							</div>
							<div className="input-field mb-2">
								<input
									required="required"
									type="password"
									placeholder="Password"
								/>
							</div>
							<button>LOGIN</button>
						</form>

						<p>
							Don't have an account? <Link to="/register">Register</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
