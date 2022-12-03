import Debug from "debug";
import logger from "../startup/logger"
const debug = Debug("middleware:errorHandler");

export default (err:any,req:any,res:any,next:any) => {
    const message = err.message ||err;
    debug(message);
    logger.error(message);
    res.status(500).send(err);
}