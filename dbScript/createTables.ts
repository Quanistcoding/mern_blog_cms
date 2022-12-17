import config from "config";
import mysql from "mysql";
import { EventEmitter } from 'node:events';
import sqlCreateComments from "./createTalbeCommentsSql"
import sqlCreateUsers from "./createTableUsersSql";

const event = new EventEmitter();

const db_name:string = config.get("db_name");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:config.get("db_password"),
    database:db_name
})

let sqlCreateCategories = "CREATE TABLE categories(";
    sqlCreateCategories += "id int primary key auto_increment,";
    sqlCreateCategories += "name varchar(255)";
    sqlCreateCategories += ")";



let sqlCreatePosts = "CREATE TABLE posts(";
    sqlCreatePosts += "id int primary key auto_increment,";
    sqlCreatePosts += "categoryId int,";
    sqlCreatePosts += "title varchar(255),";
    sqlCreatePosts += "author varchar(255),";
    sqlCreatePosts += "date date,";
    sqlCreatePosts += "image text,";
    sqlCreatePosts += "content text,";
    sqlCreatePosts += "tags varchar(255),";
    sqlCreatePosts += "commentCounts int,";
    sqlCreatePosts += "status varchar(255),";
    sqlCreatePosts += "viewCounts int";
    sqlCreatePosts += ")";



const sqls = [sqlCreateCategories,sqlCreateComments,sqlCreatePosts,sqlCreateUsers];
let index = 0;
let lastIndex = sqls.length - 1;

function createTalbe(){
        if(index>lastIndex)return;
        console.log("creating tables...");
        con.query(sqls[index],(err,result)=>{
            if(err)console.log(err.message);
            console.log(sqls[index] + " done.");
            index++;
            event.emit("table created");
        })
    }

event.on("table created",()=>{
    createTalbe();
})
    
con.connect((err)=>{
    if(err)throw err;
    event.emit("table created");
})







