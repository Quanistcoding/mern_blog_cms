import mysql from "mysql";
import Debug from "debug";
const debug = Debug("models:categories");

interface createCategoryDto {
        name:string
}

export default class Categories{
    static con:(sql:string)=>void;

    public static injectDb(connection:mysql.Connection){    
        this.con = (sql:string) => {
            return new Promise((resolve,reject)=>{
                connection.query(sql,(err,result)=>{
                    if(err)reject(err);
                    resolve(result);
                })
            })
        }
    }

    public static async find(){
        const sql = "SELECT * FROM categories";
        const res = await this.con(sql);
        return res;
    }



    public static async insertOne(data:createCategoryDto){
        const {name} = data;
        const sql = `INSERT INTO categories (name) VALUES ("${name}")`;
        const res = await this.con(sql);
        return res;
    }   
}