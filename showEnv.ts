import config from "config";
import express from "express";
const app = express();

console.log("NODE_ENV: " + app.get("env"));
console.log("mysql database: " + config.get("db_name"));

try{
    const db_password = config.get("db_password");
}catch(err:Error|any){
    console.error(err.message);
}