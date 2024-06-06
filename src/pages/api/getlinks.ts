import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectDb } from "../../app/utils/db/connectDB";
import User from "../../app/models/user.model";
import cookie from "cookie";
import { t_InputData } from "@/components/widgets/create/addDialog";
import { ValidateUser } from "../util/validateUser";

export default async function getLinks(req: NextApiRequest, res: NextApiResponse) {
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

    const linkData = await User.findById(id);

    return res.json({ error: false, message: "success", linkData });
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: "Login failed" });
  }
}
