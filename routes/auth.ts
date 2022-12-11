import {Router} from "express";
import User from "../models/user";

const router = Router();

interface UserToLogin {
    email:string,
    password:string
}

router.post("/",(req,res)=>{
    const {email,password} = req.body as UserToLogin;
    if(!email)return res.status(400).send("email is required");
    
});

export default router;