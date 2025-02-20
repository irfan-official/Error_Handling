import express from "express";
import userRouter from "./routes/user.routes.js";
const app = express();

app.listen(4000, () =>
  console.log(`server is running at http://localhost:${4000}`)
);

app.use(userRouter);
