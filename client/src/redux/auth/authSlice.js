import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: null,
		isAuthenticated: false,
	},
	reducers: {
		logout: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(authAPI.endpoints.login.matchPending, (state, action) => {
				console.log("pending", action);
			})
			.addMatcher(authAPI.endpoints.login.matchFulfilled, (state, action) => {
				console.log("fulfilled", action);
				state.user = action.payload.result.user;
				state.token = action.payload.result.token;
			})
			.addMatcher(authAPI.endpoints.login.matchRejected, (state, action) => {
				console.log("rejected", action);
			});
	},
});

export const {
	authPending,
	authSuccess,
	authFailed,
	loginPending,
	loginSuccess,
	loginFailed,
	logout,
} = authSlice.actions;

export default authSlice.reducer;
