import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
connect();
export async function GET(request: NextRequest) {
  try {
    const tokenData = await getDataFromToken(request);
    const userId = tokenData?.id;
    const userFound = await User.findById({ _id: userId });
    return NextResponse.json(userFound, { status: 200 });
  } catch (error: any) {
    NextResponse.json({ msg: error.message });
  }
}
