import {Router} from "express";
import idIsNaNCheck from "../middleware/idIsNaNCheck";
import Comment from "../models/comment";

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

export default router;