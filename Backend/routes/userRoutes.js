const express = require("express");
// const multer = require("multer");

const userRouter = express.Router();
const {
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  registerUser,
  uploadAndUpdateEmployees,
  generateSignature,
} = require("../controllers/userController");
const { isAdmin, isAuthenticated } = require("../middleware/auth");

// const upload = multer({ dest: "uploads/" });

userRouter.route("/register").post(isAdmin, registerUser);
userRouter.route("/").get(getUsers);
userRouter
  .route("/:id")
  .put(updateUser)
  .get(getUser)
  .delete(isAdmin, deleteUser);
userRouter.route("/csv-upload").post(isAdmin, uploadAndUpdateEmployees);
userRouter.route("/signature").post(generateSignature);

module.exports = userRouter;
