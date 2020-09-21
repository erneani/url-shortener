import express from "express";
import ShortUrlController from "../controllers/shortUrlController";

const shortenerRouter = express.Router();

shortenerRouter.post("/short-url", ShortUrlController.create);

shortenerRouter.get("/short-url/:shortId", ShortUrlController.redirect);
shortenerRouter.get("/short-url", ShortUrlController.list);

export default shortenerRouter;
