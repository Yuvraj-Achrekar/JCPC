let asynHandler = require("express-async-handler");
let User = require("../model/userModel");
const cloudinary = require("../config/cloudinaryConfig");

const registerUser = async (req, res) => {
  try {
    let { domainID, password, isAdmin, email, name, role } = req.body;
    domainID = domainID.toLowerCase();
    const userExists = await User.findOne({ domainID });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists!");
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, 10); // 2nd arg is by-default is salt
    let user = {
      domainID,
      password,
      isAdmin,
      email,
      name,
      role,
    };

    const newUser = new User(user);
    if (newUser) {
      await newUser.save();
      return res
        .status(200)
        .json({ success: true, message: "New User Created", newUser });
    } else {
      throw new Error("User schema didn't match");
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUsers = asynHandler(async (req, res) => {
  try {
    let users = await User.find();
    if (!users) {
      throw new Error("Unable to fetch users from User table");
    }
    res.status(200).json(users);
  } catch (error) {
    console.error(`Error in getUsers API ${error.message}`);
    return {
      success: false,
    };
  }
});

const getUser = asynHandler(async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "No user found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(`Error in getUser API ${error.message}`);
    return {
      success: false,
    };
  }
});

const updateUser = asynHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    // const updatedUser = await User.findByIdAndUpdate(user, req.body, {
    // 	new: true,
    // 	runValidators: true,
    // });
    // res.status(200).json(updatedUser);

    // Copies all properties from req.body to the user object.
    // If req.body has a property that already exists in user, it overwrites the value in user.
    // If req.body has a property that does not exist in user, it adds the new property to user.
    Object.assign(user, req.body);
    const updatedUser = await user.save();
    res.status(200).json({
      success: true,
      message: `${user.domainID} profile updated successfully`,
      updatedUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("No id found");
    }
    const user = await User.findById(id);
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    await user.deleteOne();
    res.status(200).json({
      success: true,
      message: `User ${user.domainID} has been deleted`,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const uploadAndUpdateEmployees = async (req, res) => {
  try {
    let users = req.body;

    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({ message: "Invalid or empty data." });
    }

    const notFoundUsers = []; // To track users not in DB

    // Process each user in the array
    for (const user of users) {
      const { domainID, issues, score } = user;

      if (!domainID || !issues || !score) {
        console.warn(`Skipping invalid user: ${JSON.stringify(user)}`);
        continue; // Skip invalid entries
      }

      // Check if user exists in the database
      const existingUser = await User.findOne({ domainID });

      if (existingUser) {
        // Merge existing user data with the new input
        const updatedData = {
          issues: issues || existingUser.issues, // Use new or existing issues
          // email: existingUser.email, // Ensure unique field stays consistent
          // name: existingUser.name, // Retain original name
          // role: existingUser.role || user.role, // Retain or update role,
          score: {
            previous: score.previous || existingUser.score.previous,
          },
        };
        // Update the user
        await User.updateOne({ domainID }, { $set: updatedData });
      } else {
        // Add to not-found list if user doesn't exist
        notFoundUsers.push(user);
      }
    }

    res.status(200).json({
      success: true,
      message: "Bulk update completed.",
      usersNotFound: notFoundUsers,
    });
  } catch (error) {
    console.error("Error during bulk update:", error);
    res
      .status(500)
      .json({ message: "An error occurred.", error: error.message });
  }
};

const generateSignature = (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const public_id = req.query.public_id; // Get public_id from query parameters
  const upload_preset = process.env.CLOUDINARY_UPLOAD_PRESET;
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      public_id,
      upload_preset,
      overwrite: true,
    },
    process.env.CLOUDINARY_API_SECRET
  );
  res.json({ timestamp, signature, public_id, upload_preset });
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  registerUser,
  uploadAndUpdateEmployees,
  generateSignature,
};
