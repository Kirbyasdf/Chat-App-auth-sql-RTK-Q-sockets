import {
	authPending,
	authSuccess,
	authFailed,
	loginPending,
	loginSuccess,
	loginFailed,
	logout,
} from "./authSlice";

import { setToken, removeToken } from "../../utils/tokenStorage.js";

const { REACT_APP_BASE_URL } = process.env;

export const loadUser = (token) => async (dispatch) => {
	if (!token) {
		return dispatch(authFailed("[ERROR] No Token."));
	}
	try {
		dispatch(authPending());
		const res = await fetch(REACT_APP_BASE_URL + "/auth", {
			headers: { Authorization: "Bearer " + token },
		});
		const response = await res.json();
		console.log(response);

		response.success
			? dispatch(authSuccess({ user: response.data }))
			: dispatch(authFailed({ error: response.error }));

		return response;
	} catch (err) {
		dispatch(authFailed({ error: err.toString() }));
	}
};

export const login = ({ username, password }) => async (dispatch) => {
	try {
		dispatch(loginPending());

		const res = await fetch(REACT_APP_BASE_URL + "/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
		});
		const response = await res.json();

		if (response.success) {
			dispatch(loginSuccess());
			await setToken(response.token);
		} else {
			dispatch(loginFailed({ error: response.error }));
			alert(response.error);
		}
	} catch (err) {
		dispatch(loginFailed({ error: err.toString() }));
		alert(err.toString());
	}
};

export const logoutUser = () => async (dispatch) => {
	await removeToken();
	return dispatch(logout());
};
