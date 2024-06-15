"use server";

import Links from "../models/link.model";

export const isActiveChange = async ({
  isActive,
  id,
}: {
  isActive: boolean;
  id: string;
}) => {
  try {
    const res = await Links.findByIdAndUpdate(id, { isActive }, { new: true });

    console.log(res);
    if (!res) return { error: true, message: "Internal Server Error" };
    else
      return {
        error: false,
        message: `Successfully updated ${res.title.slice(0, 10)}`,
      };
  } catch (error) {
    return { error: true, message: "Internal Server Error" };
  }
};
