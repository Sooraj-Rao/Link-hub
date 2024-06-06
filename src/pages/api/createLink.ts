import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectDb } from "../../app/utils/db/connectDB";
import User from "../../app/models/user.model";
import cookie from "cookie";
import { t_InputData } from "@/components/widgets/create/addDialog";
import { ValidateUser } from "../util/validateUser";

export default async function createLinkHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await ConnectDb();

    const { link, title, description }: t_InputData = req.body;
    if (!link || !title || !description) {
      return res.status(400).json({ error: true, message: "All fields mandatory" });
    }

    const cookies = cookie.parse(req.headers.cookie || "");

    const { error, token, message, data, bad } = await ValidateUser(cookies);

    if (error && !token) {
      return res.status(401).json({ error: true, message });
    }
    if (bad) {
      return res.status(401).json({
        error: true,
        message: "UnAuthorized..Please login",
        bad: true,
      });
    }

    const { id } = data;
    const newLink = { link, title, description };

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $push: { linktree: newLink } },
      { new: true }
    );

    if (updatedUser) {
      return res.status(200).json({
        message: "success",
        error: false,
        data: updatedUser,
      });
    } else {
      return res.status(500).json({
        message: "failed to update",
        error: true,
        data: null,
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: true, message: "Internal server error" });
  }
}
