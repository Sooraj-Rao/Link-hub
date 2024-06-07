"use server";
import Links from "../models/link.model";

export const UpdateLink = async ({
  id,
  newLock,
}: {
  id: string;
  newLock: string;
}) => {
  try {
    const res = await Links.findByIdAndUpdate(id, { lock: newLock });
    if (res) {
      return { error: false, message: "Successfully locked the Link" };
    } else {
      return { error: true, message: "Failed to lock the link" };
    }
  } catch (error) {
    return { error: true, message: "Failed to lock the link" };
  }
};
