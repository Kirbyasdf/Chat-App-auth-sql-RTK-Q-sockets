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
							Already have an account? <Link to="/login">Login</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
