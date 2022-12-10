import Debug from "debug";
import IPost from "../dtos/post";
import Db from "./db";
import Joi from "joi";

const debug = Debug("models:user");

export default class Post extends Db{
    public static async find(){
        const sql = "SELECT * FROM posts";
        const res = await this.con(sql);
        return res;
    }

    public static async findOne(id:number){
        const sql = `SELECT * FROM posts WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    }

    public static async insertOne(input:IPost){
        const {categoryId,title,author,status,tags,image,content}= input as IPost;
        let sql = `INSERT INTO posts (categoryId,title,author,status,tags,image,content,date,commentCounts,viewCounts) VALUES `;
            sql += `("${categoryId}","${title}","${author}","${status}","${tags}","${image}","${content}",now(),0,0)`;
        const res = await this.con(sql);
        return res;
    }   

    public static async updateById(id:number,input:IPost){
        const {categoryId,title,author,status,tags,image,content} = input;
        let sql = `UPDATE posts SET categoryId = "${categoryId}", `;
        sql += `title = "${title}",author = "${author}",status = "${status}", `;
        sql += `tags = "${tags}",image = "${image}",content = "${content}" `;
        sql += `WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    public static async deleteById(id:number){
        const sql = `DELETE FROM posts WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    public static validate(input:IPost){
        const schema = Joi.object({
           categoryId:Joi.number().required(),
           title:Joi.string(),
           author:Joi.string(),
           status:Joi.valid("published","draft").required(),
           tags:Joi.array().items(Joi.string()),
           image:Joi.string(),
           content:Joi.string()
        })

        return schema.validate(input);
    }
}

