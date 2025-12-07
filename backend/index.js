import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

app.get("/", (req, res) => {
  res.send("Backend is Live 🚀");
});
