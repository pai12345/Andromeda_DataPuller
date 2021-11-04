import {Status_Message} from "./utility/utility";
import server from "./packages/server"

//Initialse Server
const initialise = server.initialise_server()

//Server graceful exit
process.on("SIGTERM", () => {
  console.log(Status_Message.Closing_http_server);
  initialise.close(() => {
    console.log(Status_Message.Http_server_closed);
    process.exit(0);
  });
  process.exit(0);
});