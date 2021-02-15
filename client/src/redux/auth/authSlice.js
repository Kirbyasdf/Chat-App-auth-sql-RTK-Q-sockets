import { createSlice, current } from "@reduxjs/toolkit";
import { api } from "../../services/api";

const initialState = {
	user: null,
	token: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: () => initialState,
		setToken: (state, { payload }) => {
			console.log("in set token ", payload);
			state.token = payload.token;
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
				state.token = payload.result.token;
				console.log("state in slice", current(state));
				localStorage.setItem("token", payload.result.token);
			})
			.addMatcher(api.endpoints.authenticate.matchFulfilled, (state, { payload }) => {
				state.user = payload.result.data;
				console.log(payload);
				state.isAuthenticated = true;
			});
	},
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
