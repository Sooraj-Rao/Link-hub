"use server";
import User from "../models/user.model";
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
    const isExist=await User.findOne({email});
    if(isExist){
      return { error: true, message: "Email already exist.Please login" };
    }
    await User.create({
      name: email.split("@")[0].replace(/\d+/g, ""),
      email,
      password,
    });
    return { error: false, message: "success" };
  } catch (error) {
    console.log(error);
    return { error: true, message: "failed" };
  }
};
