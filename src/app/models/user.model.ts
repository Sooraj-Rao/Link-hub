import mongoose, { Schema } from "mongoose";


const treeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

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
    linktree: [treeSchema],
    sublinktree:[treeSchema]
  },
  { timestamps: true }
);

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
