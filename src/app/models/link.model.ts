import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "users" },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
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
    shortLink: {
      type: String,
      required: true,
    },
    lock: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Links = mongoose.models.Links || mongoose.model("Links", linkSchema);

export default Links;
