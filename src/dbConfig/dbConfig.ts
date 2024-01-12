import mongoose from "mongoose";

import "dotenv/config";
export async function connect() {
  try {
     mongoose.connect(process.env.)
  } catch (error) {
    console.error("MONGODB is not connected");
    console.log(error);
  }
}
