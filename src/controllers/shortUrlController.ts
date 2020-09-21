import shortUrl from "../models/shortUrlModel";
import { Request, Response } from "express";

class ShortUrlController {
  public static async list(req: Request, res: Response): Promise<Response> {
    try {
      const shortUrlsList = await shortUrl.find();

      return res.status(200).json({
        shortUrls: shortUrlsList,
      });
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const { fullUrl } = req.body!;

    try {
      const newShortUrl = new shortUrl({
        full: fullUrl,
      });
      await newShortUrl.save();

      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err,
      });
    }
  }

  public static async redirect(
    req: Request,
    res: Response
  ): Promise<void | Response> {
    try {
      const { shortId } = req.params;

      console.log(shortId);

      const shortUrlItem = await shortUrl.findOne({ short: shortId });

      console.log(shortUrlItem);

      if (!shortUrlItem) throw 404;

      shortUrlItem.clicks++;
      await shortUrlItem.save();

      return res.redirect(shortUrlItem.full);
    } catch (err) {
      if (err === 404) {
        return res.status(404).json({
          message: "No record found",
        });
      }

      return res.status(400).json({
        message: "Unexpected error",
      });
    }
  }
}

export default ShortUrlController;
