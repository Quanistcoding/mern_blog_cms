import { Router } from "express";
import CreateGenreDto from "../dtos/create-genre";
import Categories from "../models/categories";

const router = Router();

router.get("/",async (req,res)=>{
    try{
        const categories = await Categories.find();
        console.log(categories);
        res.json(categories);
    }catch(err){
        console.log(err);
    }   
})

router.post("/", async (req,res)=>{
    const {name} = req.body;

    try{
        const categories = await Categories.insertOne({name});
        console.log(categories);
        res.json(categories);
    }catch(err){
        console.log(err);
    }      
})


router.post("/",(req,res)=>{
    const {name} = req.body as CreateGenreDto;
    
    res.status(201).json("");
})

export default router;