import config from "config";
import express from "express";
const app = express();

console.log("NODE_ENV: " + app.get("env"));
console.log("mysql database: " + config.get("db_name"));