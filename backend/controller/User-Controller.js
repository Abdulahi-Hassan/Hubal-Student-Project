const User = require("../model/User-Model");
const bcrypt = require("bcryptjs");

const GetAllUsers = async (req, res) => {
  let { id } = req.user;
  let GetAllUser = await User.find({ _id: { $ne: id } });
  res.send(GetAllUser);
};
const GetUser = async (req, res) => {
  let { id } = req.params;
  let GetUserById = await User.findOne({ _id: id });
  if (!GetUserById) return res.send([]);
  res.send(GetUserById);
}
const UpdateUser = async (req, res) => {
  let { UserName, Email, Confirm, Profile, Role, Gender } = req.body;
  let { id } = req.params;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(Confirm, salt);
  let EditUser = await User.findByIdAndUpdate(
    id,
    {
      UserName,
      Email,
      Confirm,
      Password: hashedPassword,
      Profile,
      Role,
      Gender,
    },
    { new: true }
  );
  await EditUser.save();
  res.send({
    status: "success",
    message: "User Updated Successfully",
    EditUser,
  });
};
const DeleteUser = async (res, req) => {
  let { id } = req.params;
  let RemoveUser = await User.findByIdAndDelete(id);
  res.send({
    status: "Success",
    message: "Successfully Deleted User",
    RemoveUser,
  });
}

module.exports = {
  GetAllUsers,
  GetUser,
  UpdateUser,
  DeleteUser,
};
