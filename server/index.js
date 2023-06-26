const express = require("express");
const app = express();
require("dotenv").config();

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
//database
const connectDB = require("./database/connect");

//middleware
app.use(express.json());

//routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

const port = process.env.Port || 3000;

const start = async () => {
  try {
    //connect db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
