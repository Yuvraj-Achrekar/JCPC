const jwt = require("jsonwebtoken");

const sendCookie = (user, res, message, statusCode = 200) => {
	const token = jwt.sign({ _id: user._id }, "randomsecretkey");
	res
		.status(statusCode)
		.cookie("token", token, {
			httpOnly: true,
			maxAge: 2 * 60 * 60 * 1000,
			sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
			secure: process.env.NODE_ENV === "Development" ? false : true,
		})
		.json({
			success: true,
			message,
			user,
		});
};

module.exports = sendCookie;
