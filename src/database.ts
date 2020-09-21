import mongoose from "mongoose";

const dbURI = process.env.MONGODB_URI!;

const connection = mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    }
  }
);

export default connection;
