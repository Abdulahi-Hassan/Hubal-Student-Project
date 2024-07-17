const express = require("express");
const Database = require("./config/Database.Config");
require("dotenv").config();
const app = express();
const path = require("path");
const UserAuthRoutes = require("./routes/User-Auth-Routes");
const UserRoutes = require("./routes/User-Routes");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // enables sessions
  })
);
app.use(express.json());
app.use("/api/auth", UserAuthRoutes);
app.use("/api", UserRoutes);
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT_URL = process.env.PORT || 4000;

app.listen(PORT_URL, Database(), () => console.log("listening on port 4000"));


