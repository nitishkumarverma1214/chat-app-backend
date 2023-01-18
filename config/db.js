const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONOGO_URI, {});
    console.log(`Connected to mongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error is ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
