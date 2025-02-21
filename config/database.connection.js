import mongoose from "mongoose";
import ErrorHandler from "../utils/errorHandler.utils..js";

export default async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL);
    console.log(`Connected with ${connection.host}`);
  } catch (err) {
    console.error(" Database connection failed:", err.message);
    return new ErrorHandler("Database connection error", 501);
  }
};
