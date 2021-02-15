import { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../../assets/images/register.svg";
import "./Auth.scss";

export const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submitForm = async (e) => {
		e.preventDefault();
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
