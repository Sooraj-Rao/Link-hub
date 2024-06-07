import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectDb } from "../../app/utils/db/connectDB";
import User from "../../app/models/user.model";
import cookie from "cookie";
import { t_InputData } from "@/components/widgets/create/addDialog";
import { ValidateUser } from "../util/validateUser";
import Links from "@/app/models/link.model";

export default async function getLinks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await ConnectDb();

    const cookies = cookie.parse(req.headers.cookie || "");

    const { error, token, message, data, bad } = await ValidateUser(cookies);

    if (error && !token) {
      return res.json({ error: true, message: message });
    }
    if (bad) {
      return res.json({
        error: true,
        message: "UnAuthorized..Please login",
        bad: true,
      });
    }

    const { id } = data;

    const UserData = await User.findById(id);

    const Result = await Promise.all(
      UserData.linktree.map(async (item) => {
        const populatedItem = await User.populate(item, {
          path: "linkData",
          model: Links,
        });
        return populatedItem;
      })
    );
    console.log(Result);

    return res.json({ error: false, message: "success", links: Result });
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: "Failed to get links" });
  }
}
