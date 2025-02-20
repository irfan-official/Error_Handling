import express from "express";
import { config } from "dotenv";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send(hello);
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
    "err.message": err.message,
    "req.fresh": req.fresh,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started at http://localhost:${process.env.PORT || 3000}/`);
});

export default app;
