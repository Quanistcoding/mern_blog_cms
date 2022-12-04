import {Request,Response,NextFunction} from "express";

export default (req:Request,res:Response,next:NextFunction) => {
    const id = Number(req.params.id);
    if(isNaN(id))return res.status(400).send("id is not a number");
    next();
}