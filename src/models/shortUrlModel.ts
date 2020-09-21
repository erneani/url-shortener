import mongoose from "mongoose";
import shortid from "shortid";

interface IShortUrl extends mongoose.Document {
  full: string;
  short: string;
  clicks: number;
}

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.model<IShortUrl>("ShortUrl", shortUrlSchema);
