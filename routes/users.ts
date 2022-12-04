import { Router } from "express";
import IUser from "../dtos/user";
import User from "../models/user";
import Debug from "debug";
import idIsNaNCheck from "../middleware/idIsNaNCheck";
require("express-async-errors");

const debug = Debug("routes:users");
const router = Router();

router.get("/",async (req,res)=>{
    const result = await User.find();
    res.json(result);
})

router.get("/:id",idIsNaNCheck,async (req,res,next)=>{
    const id = Number(req.params.id);

    const result = await User.findOne(id);
    res.json(result);
})

router.post("/", async (req,res)=>{
    const {error} = User.validateInsert(req.body as IUser);
    if(error)return res.status(400).send(error.details[0].message);

    const result = await User.insertOne(req.body);
     res.json(result);
})

router.put("/:id",idIsNaNCheck,async (req,res)=>{
    const {error} = User.validateUpdate(req.body as IUser);
    if(error)return res.status(400).send(error.details[0].message);

    const id = Number(req.params.id);

    const result = await User.updateById(id,req.body);
    res.json(result);
})

router.delete("/:id",idIsNaNCheck,async (req,res)=>{
    const id = Number(req.params.id);

    const result = await User.deleteById(id);
    res.json(result);
})

export default router;