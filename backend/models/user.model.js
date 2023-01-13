import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: false,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "Email already exists! Pleas login!"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      unique: false,
    },
    cart: [ String ],
  },
  { collection: "user-data" }
);

export default mongoose.model("UserData", User);
