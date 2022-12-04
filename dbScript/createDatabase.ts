import config from "config";
import mysql from "mysql";

const db_name = config.get("db_name");


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:config.get("db_password")
})

con.connect((err)=>{
    if(err)throw err;
    console.log("db connected and creating database " + db_name);
    const sql = `CREATE DATABASE ${db_name}`;
    con.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(db_name + " created.");
        process.exit(0);
    })
})
