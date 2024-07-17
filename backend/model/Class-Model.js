const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const ClassSchema = new Schema(
  {
    UserID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    ClassName: {
      type: String,
      required: true,
    },
    ClassStatus: {
      type: String,
      required: true,
      default: "Active",
      enum: ["Active", "Pending", "Blocked"],
    },
    ClassDate: {
      type: String,
      required: false,
      default: new Date().toISOString().split("T")[0],
    },
  },
  { timestamps: true }
);

const ClassModel = model("class", ClassSchema);

module.exports = ClassModel;
