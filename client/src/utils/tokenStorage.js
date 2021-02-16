exports.storeToken = (token) => {
	localStorage.setItem("token", token);
};

exports.getToken = () => {
	return localStorage.getItem("token");
};

exports.removeToken = () => {
	localStorage.removeItem("token");
};
