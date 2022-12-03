import express from "express";
import categories from "./routes/categories"
import config from "config";
import Debug from "debug";
import morgan from "morgan";
import mysql from "mysql";
import Categories from "./models/categories";
import cofigCheck from "./startup/config";
import logger from "./startup/logger";

const debug = Debug("app:start");
cofigCheck();


logger.info("asd");




const app = express();

if(app.get("env") !== "production"){
    debug("morgnan enabled");
    app.use(morgan("tiny"));
}


app.use(express.json())

app.get("/",(req,res)=>{
    res.send("asd")
})

interface User {
    username:string,
    age:number
}


app.get("/api/users",(req,res)=>{

    res.send("asd")
})

app.use("/api/categories",categories);


const start = async () => {
    const con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:config.get("db_password"),
        database:"node_blog_cms"
    })

    await con.connect();
    debug("Database connected...");
    await Categories.injectDb(con);
    const port = config.get("port") || 4000;
    app.listen(port,()=>{debug("Server listening on port " + port)});
}

start();