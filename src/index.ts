import {Status} from "./utility/utility";
import server from "./packages/server"

//Initialse Server
const initialise = server.initialise_server()

//Server graceful exit
process.on("SIGTERM", () => {
  console.log(Status.Closing_http_server);
  initialise.close(() => {
    console.log(Status.Http_server_closed);
    process.exit(0);
  });
  process.exit(0);
});