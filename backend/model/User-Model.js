const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const UserSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Profile: {
      type: String,
      required: false,
    },

    NewPassword: {
      type: String,
      required: false,
    },

    Role: {
      type: String,
      required: false,
      enum: ["User", "Admin"],
      default: "User",
    },

    Gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
  },
  { timestamps: true }
);

const UserModel = model("user", UserSchema);

module.exports = UserModel;
