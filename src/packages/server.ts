import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import commerce from "../components/router/commerce";
import generateEnv from "../config/config"
import middleware from "../components/middleware/middleware";

/**
 * Class - Server
 * @description
 * Class having implementation details for Express server
 */
class Server {
  add_configuration() {
    const app = express();
    app.use(json({ limit: "1GB" }));
    app.use(cors({ origin: "*" }));
    app.use(helmet());
    app.use(compression());

    app.use("/api/", commerce);
    
    //Custom Middelwares
    app.use(middleware().route_middleware);
    return app;
  }
  initialise_server() {
    const PORT = generateEnv().PORT
    const app = this.add_configuration();

    //Server Listener
    const initialse = app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    });

    return initialse;
  }
}

/**
 * Instance - Express Server
 * @description
 * Instance of Express Server Class
 */
 const server = new Server();
 export default server;