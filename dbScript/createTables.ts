import config from "config";
import mysql from "mysql";
import { EventEmitter } from 'node:events';
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

let sqlCreateComments = "CREATE TABLE comments(";
    sqlCreateComments += "id int primary key auto_increment,";
    sqlCreateComments += "postId int,";
    sqlCreateComments += "author varchar(255),";
    sqlCreateComments += "email varchar(255),";
    sqlCreateComments += "content text,";
    sqlCreateComments += "status varchar(255)";
    sqlCreateComments += ")";

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

let sqlCreateUsers = "CREATE TABLE users(";
    sqlCreateUsers += "id int primary key auto_increment,";
    sqlCreateUsers += "username varchar(255),";
    sqlCreateUsers += "password varchar(255),";
    sqlCreateUsers += "firstname varchar(255),";
    sqlCreateUsers += "lastname varchar(255),";
    sqlCreateUsers += "email varchar(255),";
    sqlCreateUsers += "image text,";
    sqlCreateUsers += "role varchar(255),";
    sqlCreateUsers += "UNIQUE (email)";
    sqlCreateUsers += ")";

const sqls = [sqlCreateCategories,sqlCreateComments,sqlCreatePosts,sqlCreateUsers];
let index = 0;
let lastIndex = sqls.length - 1;

function createTalbe(){
        if(index>lastIndex)return;
        console.log("creating tables...");
        con.query(sqls[index],(err,result)=>{
            if(err)throw err;
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







