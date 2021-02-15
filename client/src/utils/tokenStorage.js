exports.storeToken = (token) => {
	localStorage.setItem("token", token);
};

exports.getToken = () => {
	console.log("looking for token");
	const res = localStorage.getItem("token");
	console.log("token", res);
	return localStorage.getItem("token");
};

exports.RemoveToken = () => {
	localStorage.removeItem("token");
};
