const mongoose = require("mongoose");

const Database = () => {
  // Connect to MongoDB databaseL
  let db =
    process.env.MONGODB_CONNECTION ||
    "mongodb+srv://libanabdulahi2024:ErojKwypCs9AQmMh@cluster0.k77uilm.mongodb.net/MERN-STUDENT-PROJECT?retryWrites=true&w=majority&appName=Cluster0";
  mongoose.connect(db);
  console.log("Successfully Mongodb connection established");
};

module.exports = Database;
