import Debug from "debug";
import logger from "../startup/logger"
import {Request,Response,NextFunction} from "express";
const debug = Debug("middleware:errorHandler");

export default (err:any,req:Request,res:Response,next:NextFunction) => {
    const message = err.message ||err;
    debug(err);
    logger.error(message);
    res.status(500).send(err);
}