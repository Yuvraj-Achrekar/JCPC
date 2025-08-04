let mongoose = require("mongoose");

let connectDB = async () => {
  try {
    let connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Connection established",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    // console.log("sdfsdf")
    process.exit(1);
  }
};

module.exports = connectDB;
