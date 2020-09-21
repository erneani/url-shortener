import express from "express";
import shortenerRouter from "./shortUrlRoutes";

const router = express.Router();

router.use(shortenerRouter);

router.get("/", (_, res) => {
  res.send("Hello world!");
});

export default router;
