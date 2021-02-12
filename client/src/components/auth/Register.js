import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import registerImage from "../../assets/images/register.svg";
import "./Auth.scss";

const { REACT_APP_BASE_URL } = process.env;

const Register = () => {
	const [username, setUsername] = useState("bBALLer");
	const [password, setPassword] = useState("125");

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(REACT_APP_BASE_URL + "/register", {
				username,
				password,
			});
			console.log(res);
		} catch (e) {
			if (e.response.data.errors) {
				alert([e.response.data.errors]);
			} else {
				alert("username is already taken");
			}
		}
	};

	return (
		<div id="auth-container">
			<div id="auth-card">
				<div className="card-shadow">
					<div id="image-section">
						<img src={registerImage} alt="Register" />
					</div>
					<div id="form-section">
						<h2>Welcome</h2>
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
							<button>Register</button>
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
