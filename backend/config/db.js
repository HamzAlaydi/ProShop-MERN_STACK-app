import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected... ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(error.message);
    console.error("error.message".red.bold);
    process.exit(1);
  }
};

export default connectDB;
