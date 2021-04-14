require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const sequelize = require("sequelize");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router");
const { APP_PORT } = process.env;

const app = express();
const PORT = APP_PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.get("/test", (req, res) => {
	const data = {
		agent: req.header("user-agent"), // User Agent we get from headers
		referrer: req.header("referrer"), //  Likewise for referrer=
		ip: req.header("x-forwarded-for") || req.connection.remoteAddress, // Get IP - allow for proxy
	};
	res.send(data);
});

app.get("*", (req, res) => {
	res.status(404).send({ success: false, status: res.statusCode });
});

app.listen(PORT, () => console.log("Sever good to go on PORT: " + PORT));
