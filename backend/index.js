import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

//Database connection
connectDb();
const app = express();
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
