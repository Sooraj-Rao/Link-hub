import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectDb } from "../../app/utils/db/connectDB";
import User from "../../app/models/user.model";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await ConnectDb();

    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ error: true, message: "All fields mandatory" });
    }

    const isExist = await User.findOne({ email });
    if (!isExist) {
      return res.json({ error: true, message: "Email is Invalid" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: isExist.email, id: isExist._id },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" } 
    );

    res.setHeader("Set-Cookie", serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      maxAge: 360000, 
      path: "/"
    }));

    return res.json({
      message: "success login",
      error: false,
    });
  } catch (error) {
    console.log(error);
    
    return res.json({ error: true, message: "Login failed" });
  }
}
