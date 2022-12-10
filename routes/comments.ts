import {Router} from "express";
import Comment from "../models/comment";

const router = Router();

router.get("/",async (req,res)=>{
    const result = await Comment.find();
    res.send(result);
});

export default router;