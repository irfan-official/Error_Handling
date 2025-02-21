import express, { urlencoded } from "express";
import userRouter from "./routes/user.routes.js";
import errorMiddlewar from "./middlewares/error.middlewares.js";
import databaseConnect from "./config/database.connection.js";
import { config } from "dotenv";
config();
const app = express();

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));

app.listen(4000, () => {
  console.log(`server is running at http://localhost:${4000}`);
});
databaseConnect();

app.use("/", userRouter);

app.use(errorMiddlewar);
