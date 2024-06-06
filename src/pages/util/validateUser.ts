import User from "@/app/models/user.model";
import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_SECRET;

export const ValidateUser = async (cookies) => {
  if (!cookies || !cookies.token) {
    return { error: true, token: null, message: "No token provided" };
  }

  try {
    let isValidUser;
    const decoded = jwt.verify(cookies.token, secretKey);
    if (decoded) {
      const { id } = decoded;
      isValidUser = await User.findById(id);
      if (!isValidUser)
        return { error: true, message: "User does't exist", bad: true };
    }
    return {
      error: false,
      message: "success",
      data: { id: isValidUser?._id, email: isValidUser?.email },
    };
  } catch (error) {
    console.log(error);

    return { error: true, token: false, message: "Invalid token" };
  }
};
