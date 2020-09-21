import express, { Application } from "express";
import database from "./database";
import router from "./routes";

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.useRoutes();
    this.useDatabase();
  }

  useDatabase() {
    database;
  }

  useRoutes() {
    this.app.use(router);
  }

  startServer() {
    this.app.listen(process.env.PUBLIC_PORT, () => {
      console.log(`Im working on port ${process.env.PUBLIC_PORT} :)`);
    });
  }
}

export default App;
