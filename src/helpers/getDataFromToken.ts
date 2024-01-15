import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export const getDataFromToken = (request: NextRequest) => {
  try {
    const token: any = request.cookies.get("token")?.value;
    const secretKey: string | undefined = process.env.TOKEN_SECRET;
    const decodedData = jwt.verify(token, secretKey!, {
      algorithms: ["HS256"],
    });
    return decodedData;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.log("Token has expired.");
    } else {
      console.log("Invalid token or signature.");
    }
  }
};
