import { Router } from "express";
import IPost from "../dtos/post";
import Post from "../models/post";
import Debug from "debug";
import idIsNaNCheck from "../middleware/idIsNaNCheck";
require("express-async-errors");

const debug = Debug("routes:posts");
const router = Router();

router.get("/",async (req,res)=>{
    const result = await Post.find();
    res.json(result);
})

router.get("/:id",idIsNaNCheck,async (req,res)=>{
    const id = Number(req.params.id);

    const result = await Post.findOne(id);
    res.json(result);
})

router.post("/", async (req,res)=>{
    const {error} = Post.validate(req.body as IPost);
    if(error)return res.status(400).send(error.details[0].message);

    const result = await Post.insertOne(req.body);
     res.json(result);
})

router.put("/:id",idIsNaNCheck,async (req,res)=>{
    const {error} = Post.validate(req.body as IPost);
    if(error)return res.status(400).send(error.details[0].message);

    const id = Number(req.params.id);

    const result = await Post.updateById(id,req.body);
    res.json(result);
})

router.delete("/:id",idIsNaNCheck,async (req,res)=>{
    const id = Number(req.params.id);

    const result = await Post.deleteById(id);
    res.json(result);
})

export default router;