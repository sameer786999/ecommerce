import mongoose, { connect } from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDb ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in mongoDb ${error} `.bgWhite.white);
  }
};

export default connectDB;

