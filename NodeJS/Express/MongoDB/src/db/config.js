const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.BASE_CONNECTION_URL);
    console.log("DB Conected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
