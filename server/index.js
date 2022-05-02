require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/index");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL,
//   })
// );

app.use("/items", router);
app.get("/", (req, res) => {
  res.send("Hello");
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import router from "./router/index.js";
// const app = express();
// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
// app.use("/items", router);
// app.get("/", (req, res) => {
//   res.send("Hello");
// });
// const mongodb =
//   "mongodb+srv://test:test@cluster0.ugvtp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, console.log(`Server running on ${PORT}`)))
//   .catch((err) => console.log(err));
