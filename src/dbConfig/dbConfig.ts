import mongoose, { connection } from "mongoose";
import "dotenv/config";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB is connected");
    });
  } catch (error) {
    console.error("MONGODB is not connected");
    console.log(error);
  }
}
