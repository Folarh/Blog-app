const express = require("express");
const app = express();
const multer = require("multer");
require("dotenv").config();

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/post");
const categoryRouter = require("./routes/category");
//database
const connectDB = require("./database/connect");

//middleware
app.use(express.json());

//routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

const port = process.env.Port || 3000;

const start = async () => {
  try {
    //connect db
    await connectDB(process.env.MONGO_URI);
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "images");
      },
      filename: (req, file, cb) => {
        cb(null, "req.body.name");
      },
    });
    const upload = multer({ storage: storage });
    app.post("/api/upload", upload.single("file"), (req, res) => {
      res.status(200).json("file has been uploaded");
    });

    app.listen(port, () => {
      console.log(`app is listening on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
