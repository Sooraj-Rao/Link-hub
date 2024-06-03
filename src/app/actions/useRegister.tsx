"use server";
import User from "../models/user.mode";
import { ConnectDb } from "../utils/db/connectDB";

export const Register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  if (!email || !password)
    return { error: true, message: "All fields mandatory" };
  try {
    await ConnectDb();
    const newUser = await User.create({
      name: email.split("@")[0].replace(/\d+/g, ""),
      password,
    });
    return { error: false, message: "success", data: newUser };
  } catch (error) {
    console.log(error);
    return { error: true, message: "failed" };
  }
};
