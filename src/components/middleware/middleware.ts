import { RequestHandler } from "express";
import { Status_Message, Status_Codes } from "../../utility/utility";

/**
 * Middleware - Route Validation
 * @description
 * Middleware to validate routes
 */
const route_middleware: RequestHandler = async (req, res) => {
  try {
    let status: number;
    let message: string;

    if (req.originalUrl === "/") {
      status = Status_Codes.Success;
      message = Status_Message.WelcomeMessage;
    } else {
      status = Status_Codes.NotFound;
      message = Status_Message.NotFoundMessage;
    }
    res.status(status).send(message);
  } catch (error) {
    res.status(error.esponse.status).send(error);
  }
};

/**
 * Middleware - Middleware Object
 * @description
 * Middleware for Project
 */

const middleware = () => {
  return {
    route_middleware: route_middleware,
  };
};

export default middleware;
