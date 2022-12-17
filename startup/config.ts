const config = require('config');
import Debug from "debug";
import express from "express";
const debug = Debug("startup:config");

const app = express();

export default () => {
  try{
    const db_password = config.get('db_password');
    const node_env = app.get("env");
    const db_name = config.get("db_name");
    debug("NODE_ENV: " + node_env);
    debug("db_name: " + db_name);
  }catch(err:any){
    console.error(err.message);
    process.exit(1);
  }

}