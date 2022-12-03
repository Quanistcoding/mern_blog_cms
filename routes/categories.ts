import { Router } from "express";
import CreateGenreDto from "../dtos/create-genre";
import Category from "../interfaces/category";
import Categories from "../models/categories";
import Debug from "debug";

const debug = Debug("routes:categories");
const router = Router();

router.get("/",async (req,res)=>{
    try{
        const result = await Categories.find();
        res.json(result);
    }catch(err){
        debug(err);
    }   
})

router.post("/", async (req,res)=>{
    const {name} = req.body as Category;

    try{
        const result = await Categories.insertOne({name});
        res.json(result);
    }catch(err){
        debug(err);
    }      
})


router.put("/:id",async (req,res)=>{
    const {name} = req.body as Category;
    const id = Number(req.params.id);
    if(isNaN(id))return res.status(400).send("id is not a number");

    try{
        const result = await Categories.updateById(id,{name});
        res.json(result);
    }catch(err){
        debug(err);
    }  
})

router.delete("/:id",async (req,res)=>{
    const {name} = req.body as Category;
    const id = Number(req.params.id);
    if(isNaN(id))return res.status(400).send("id is not a number");

    try{
        const result = await Categories.deleteById(id);
        res.json(result);
    }catch(err){
        debug(err);
    }  
})

export default router;