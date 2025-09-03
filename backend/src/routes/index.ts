import express from "express";
import authRouter from "./auth-route";
import productRouter from "./product-route";
import { authCheck } from "../middlewares/auth-middleware";

export const router = express.Router();

router.use("/auth", authRouter);
router.use("/product", authCheck,productRouter);


