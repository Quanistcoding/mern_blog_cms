import {Router} from "express";
import idIsNaNCheck from "../middleware/idIsNaNCheck";
import Comment from "../models/comment";
require("express-async-errors");

const router = Router();

router.get("/",async (req,res)=>{
    const result = await Comment.find();
    res.send(result);
});

router.get("/:id",idIsNaNCheck,async (req,res)=>{
    const id = Number(req.params.id);
    const result = await Comment.findOne(id);
    res.send(result);
});

router.post("/",async (req,res)=>{
    const {error} = Comment.validate(req.body);
    if(error)return res.status(400).send(error.details[0].message);
    const result = await Comment.insertOne(req.body);
    res.status(201).json(result);
});

export default router;