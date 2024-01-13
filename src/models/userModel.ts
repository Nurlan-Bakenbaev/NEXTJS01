import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "Please provide a username"] },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.models.users || mongoose.model("user", userSchema);
export default User;
