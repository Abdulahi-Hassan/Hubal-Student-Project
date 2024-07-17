const User = require("../model/User-Model");
const bcrypt = require("bcryptjs");
const GenerateToken = require("../token/Generate-token");
const Validation = require("../validation/Validation");

const SignUp = async (req, res) => {
  try {
    let { UserName, Email, Password, Gender } = req.body;
    const UserExist = await User.findOne({ $or: [{ UserName }, { Email }] });
    if (UserExist) return res.send("User Already Registered");
    let { error: username } = Validation.UserNameValidation({ UserName });
    let { error: email } = Validation.EmailValidation({ Email });
    let { error: password } = Validation.PasswordValidation({ Password });
    let { error: gender } = Validation.GenderValidation({ Gender });
    if (username) return res.send(username.message);
    if (email) return res.send(email.message);
    if (password) return res.send(password.message);
    if (gender) return res.send(gender.message);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);
    const CreateNewUser = new User({
      UserName,
      Email,
      Password: hashedPassword,
      Profile: Gender === "male" ? "male" : "female",
      Gender,
      NewPassword: Password,
    });

    await CreateNewUser.save();
    GenerateToken(CreateNewUser, res);
  } catch (error) {
    res.send(error.message);
  }
};

const Login = async (req, res) => {
  try {
    let { UserName, Email, Password } = req.body;
    let { error } = Validation.UserExistValidation({ Email, UserName });
    let { error: password } = Validation.PasswordValidation({ Password });
    if (error) return res.send(error.message);
    const UserExist = await User.findOne({ $or: [{ UserName }, { Email }] });
    if (!UserExist) return res.send("User Not Found");
    if (password) return res.send(password.message);
    const isMatch = await bcrypt.compare(Password, UserExist.Password);
    if (!isMatch) return res.send("Invalid Credentials");
    GenerateToken(UserExist, res);
  } catch (error) {
    res.send(error.message);
  }
};

const Logout = async (req, res) => {
  res.clearCookie("token");
  res.send({
    message: "Successfully Logged Out",
    status: "Success",
  });
};

const Change = async (req, res) => {
  try {
    let { UserName, Email, Password, NewPassword } = req.body;
    let { error } = Validation.UserExistValidation({ Email, UserName });
    let { error: password } = Validation.PasswordValidation({ Password });
    let { error: newPassword } = Validation.NewPassword({ NewPassword });
    if (error) return res.send(error.message);
    const UserExist = await User.findOne({ $or: [{ UserName }, { Email }] });
    if (!UserExist) return res.send("User Not Found");
    if (password) return res.send(password.message);

    const isMatch = await bcrypt.compare(Password, UserExist.Password);
    if (!isMatch) return res.send("Invalid Credentials");
    if (newPassword) return res.send(newPassword.message);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(NewPassword, salt);

    let UserUpdate = await User.findByIdAndUpdate(
      UserExist._id,
      {
        UserName,
        Email,
        Password: hashedPassword,
        NewPassword,
      },
      { new: true }
    );
    await UserUpdate.save();
    res.send({
      message: "User Details Updated Successfully",
      status: "Success",
      UserUpdate,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { SignUp, Login, Logout, Change };
