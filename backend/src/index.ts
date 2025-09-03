import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {router} from "./routes";
import { errorHandler } from "./middlewares/error-middleware";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);

app.listen(port, () => {
  console.info(`server running at port ${port}`);
});
