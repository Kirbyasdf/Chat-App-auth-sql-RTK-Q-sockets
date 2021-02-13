export const reducers = {
	authPending: (state) => {
		if (state.loading === "idle") state.loading = "pending";
	},
	authSuccess: (state, { payload }) => {
		if (state.loading === "pending") {
			state.loading = "idle";
			state.user = payload.user;
			state.token = payload.token;
			state.isAuthenticated = true;
		}
	},
	authFailed: (state) => {
		if (state.loading === "pending") {
			state.loading = "idle";
			state.form = null;
		}
	},
	loginPending: (state) => {
		if (state.loading === "idle") state.loading = "pending";
	},
	loginSuccess: (state, { payload }) => {
		if (state.loading === "pending") {
			state.loading = "idle";
			state.token = payload;
			state.isAuthenticated = true;
		}
	},
	loginFailed: (state, { payload }) => {
		if (state.loading === "pending") {
			state.loading = "idle";
			state.error = payload.error;
		}
	},
	logout(state) {
		state.user = null;
		state.loading = "idle";
		state.token = null;
		state.isAuthenticated = false;
		state.form = null;
		state.registerToken = null;
	},
};
