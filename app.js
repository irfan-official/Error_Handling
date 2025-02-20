import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
config();
const app = express();

// app.use(cors()); // Allow all origin

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res, next) => {
  try {
    res.status(200).send(hello);
  } catch (err) {
    next(
      new Error(
        JSON.stringify({
          previousError: err.message,
          customError: "abe sale",
        })
      )
    );
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params); // { id: '123' }
  //res.send(`User ID: ${req.params.id}`);
  return res.status(200).json({
    "req.params": req.params,
    "req.query": req.query,
    "req.fresh": req.fresh,
  });
});

app.use((err, req, res, next) => {
  return res.status(500).json({
    "err.message": JSON.parse(err.message),
    "req.fresh": req.fresh,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started at http://localhost:${process.env.PORT || 3000}/`);
});

export default app;
