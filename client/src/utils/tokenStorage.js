exports.StoreToken = (token) => {
	token = localStorage.setItem("token");
};

exports.RemoveToken = () => {
	localStorage.removeItem("token");
};
