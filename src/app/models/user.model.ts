import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    linktree: [{ linkData: { type: Schema.Types.ObjectId, ref: "links" } }],
    sublinktree: [{ linkData: { type: Schema.Types.ObjectId, ref: "links" } }],
  },
  { timestamps: true }
);

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
