export const reducers = {
	authPending(state, { payload }) {
		if (state.loading === "idle") state.loading = "pending";
	},
};
