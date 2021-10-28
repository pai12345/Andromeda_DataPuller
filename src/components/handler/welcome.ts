import { RequestHandler } from "express";
import { Status } from "../../utility/utility";

/**
 * Welcome Page
 * @description
 * API for Welcome Page 
 */
const welcome_handler: RequestHandler = async (_, res) => {
  try {
    res.status(Status.Success).send("Welcome to Andromeda");
  } catch (error) {
    res.status(error.esponse.status).send(error);
  }
};

export default welcome_handler;