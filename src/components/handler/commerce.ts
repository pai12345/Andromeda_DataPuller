import { RequestHandler } from "express";
import { Status_Codes } from "../../utility/utility";

/**
 * Commerce Data
 * @description
 * API for Commerce Data 
 */
const commerce_handler: RequestHandler = async (_, res) => {
  try {
    res.status(Status_Codes.Success).send("Commerce Data");
  } catch (error) {
    res.status(error.esponse.status).send(error);
  }
};

export default commerce_handler;