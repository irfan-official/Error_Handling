<<<<<<< HEAD
import express from "express"
const app = express();

app.listen(process.env.PORT || 3000, () => console.log(`Server started at http://localhost:${process.env.PORT || 3000}`))



try{
    app.get("/", (req, res) => {
        return res.status(200).send(name)
    })
    
}catch(err){  // test eror 1
    console.log(err.message)
    process.exit(1)
}

app.use((err, req, res, next) => { //test error 2
    return res.send(err.message)
})
=======
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
>>>>>>> 61ba0d658def2e6902d24a11b19205a08aa5fc27
