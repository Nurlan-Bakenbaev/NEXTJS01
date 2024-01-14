import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcrypt";
import jwt from "jsonwebtoken";
connect();
export async function Login(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    //check the user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ msg: "User not found" }, { status: 400 });
    }
    //check the password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ msg: "Incorrect Password" });
    }
    //create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    //Create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "2d",
    });
    const response = NextResponse.json({
      msg: "Login Successfull",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
