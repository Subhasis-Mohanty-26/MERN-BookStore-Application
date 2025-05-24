import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDb;
