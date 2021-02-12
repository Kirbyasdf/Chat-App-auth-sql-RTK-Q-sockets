import API from "./api";

export default {
	login: async (data) => {
		try {
			const res = await API.post("/login", data);
			const { token } = res.data.userWithToken;
			return (API.defaults.headers["Authorization"] = `Bearer ${token}`);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},

	register: async (data) => {
		try {
			const res = await API.post("/register", data);
			const { token } = res.data.userWithToken;
			return (API.defaults.headers["Authorization"] = `Bearer ${token}`);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	logout: async (data) => {
		try {
			const res = await API.post("/login", data);
			const { token } = res.data.userWithToken;
			return (API.defaults.headers["Authorization"] = `Bearer ${token}`);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
};
