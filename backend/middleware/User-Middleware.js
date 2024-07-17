const { verify } = require("jsonwebtoken");
const UserProtocol = (req, res, next) => {
  let Secret =
    process.env.JWT_SECRET_KEY || eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9;
  let token = req.headers.cookie && req.headers.cookie.split("=")[1];
  if (!token) return res.send("Token Not Found");
  verify(token, Secret, (err, user) => {
    if (err) return res.send("Invalid Token");
    req.user = user;
    next();
  });
};
module.exports = UserProtocol;
