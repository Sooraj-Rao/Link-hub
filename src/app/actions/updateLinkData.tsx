"use server";

import Links from "../models/link.model";

export const updateFieldValue = async ({ field, id, value }) => {
  try {
    let res;
    switch (field) {
      case "title":
        res = await Links.findByIdAndUpdate(
          id,
          { title: value },
          { new: true }
        );
        break;
      case "link":
        res = await Links.findByIdAndUpdate(id, { link: value }, { new: true });
        break;
      default:
        return { error: true, message: "Internal Server Error" };
    }

    console.log(res);

    if (!res) return { error: true, message: "Internal Server Error" };
    else
      return {
        error: false,
        data: res,
        message: `Successfully updated ${res.title.slice(0, 10)}`,
      };
  } catch (error) {
    return { error: true, message: "Internal Server Error" };
  }
};
