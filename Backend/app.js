const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes");

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  })
);
app.use(express.urlencoded({ extended: true })); //accepts form data from request body
app.use(express.json()); //accept json data from request body
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth/user", authRoute);
app.use("/api/user", userRoute);
// app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello Server is working");
});

module.exports = app;
