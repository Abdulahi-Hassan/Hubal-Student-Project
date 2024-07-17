const { sign } = require("jsonwebtoken");
const GenerateToken = (user, res) => {
  let Secret =process.env.JWT_SECRET_KEY || eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9;
  let token = sign({ id: user._id }, Secret, { expiresIn: "1h" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    SameSite: "MERN-STUDENTS-PROJECTS",
    expires: new Date("2025/7/8"), // 1 hour expiration
  });

  const { Password, ...Users } = user._doc;
  res.send({
    status: "Success",
    message: "Sucessfully Logged In",
    ...Users,
  });
};

module.exports = GenerateToken;
