import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const treeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  links: [linkSchema],
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    linktree: [treeSchema],
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;
