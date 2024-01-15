import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successfull",
    });
    response.cookies.set("token", "", { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ msg: error.message }, { status: 500 });
  }
}
