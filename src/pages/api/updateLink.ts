import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectDb } from "../../app/utils/db/connectDB";
import User from "../../app/models/user.model";
import cookie from "cookie";
import { t_InputData } from "@/components/widgets/create/addDialog";
import { ValidateUser } from "../util/validateUser";
import Links from "@/app/models/link.model";

export default async function UpdateLinkHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await ConnectDb();

    const { linkId }: { linkId: string } = req.body;
    if (!linkId) {
      return res.status(400).json({ error: true, message: "Failed to delete" });
    }

    const cookies = cookie.parse(req.headers.cookie || "");

    const { error, token, message, data, bad } = await ValidateUser(cookies);

    if (error && !token) {
      return res.status(401).json({ error: true, message });
    }
    if (bad) {
      return res.json({
        error: true,
        message: "UnAuthorized..Please login",
        bad: true,
      });
    }

    const { id } = data;

    const DeleteLink = await Links.findByIdAndDelete(linkId);
    if (!DeleteLink) {
      return res.status(500).json({
        message: "Failed to Delete",
        error: true,
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $pull: { linktree: { linkData: linkId } } },
      { new: true }
    );

    if (updatedUser) {
      return res.status(200).json({
        message: "Succesfully Deleted",
        error: false,
      });
    } else {
      return res.status(500).json({
        message: "Failed to Delete",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
}
