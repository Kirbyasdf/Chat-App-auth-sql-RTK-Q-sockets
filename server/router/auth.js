const router = require("express").Router();
const { protect } = require("../middleware/auth.js");
const { validate } = require("../validators");
const { rules: registrationRules } = require("../validators/auth/register");
const { rules: loginRules } = require("../validators/auth/login");

const { register, login, loadUser } = require("../controllers/auth");

router.get("/", protect, loadUser);

router.post("/register", [registrationRules, validate], register);

router.post("/login", [loginRules, validate], login);

module.exports = router;
