import { Router } from "express";
import Category from "../dtos/category";
import Categories from "../models/categories";
import Debug from "debug";
require("express-async-errors");

const debug = Debug("routes:categories");
const router = Router();

router.get("/",async (req,res,next)=>{
        const result = await Categories.find();
        res.json(result);
})

router.post("/", async (req,res)=>{
    const {name} = req.body as Category;
    const result = await Categories.insertOne({name});
     res.json(result);
   
})


router.put("/:id",async (req,res)=>{
    const {name} = req.body as Category;
    const id = Number(req.params.id);
    if(isNaN(id))return res.status(400).send("id is not a number");
    const result = await Categories.updateById(id,{name});
    res.json(result);

})

router.delete("/:id",async (req,res)=>{
    const {name} = req.body as Category;
    const id = Number(req.params.id);
    if(isNaN(id))return res.status(400).send("id is not a number");

    const result = await Categories.deleteById(id);
    res.json(result);
})

export default router;