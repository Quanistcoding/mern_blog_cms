import Debug from "debug";
import IComment from "../dtos/comment";
import Db from "./db";
import Joi from "joi";

const debug = Debug("models:comment");

export default class Comment extends Db{

    public static async find(){
        const sql = "SELECT * FROM comments";
        const res = await this.con(sql);
        return res;
    }

    public static async findOne(id:number){
        const sql = `SELECT * FROM comments WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    }
    
    public static async insertOne(input:IComment){
        const {postId,author,email,content} = input;
        let sql = `INSERT INTO comments (postId,author,email,content) VALUES `;
            sql += `("${postId}","${author}","${email}","${content}")`;
        const res = await this.con(sql);
        return res;
    }   

    public static async updateById(id:number,input:IComment){
        const {postId,author,email,content} = input;
        let sql = `UPDATE comments SET postId = "${postId}", `;
        sql += `author = "${author}",email = "${email}",content = "${content}" `;
        sql += `WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    // public static async deleteById(id:number){
    //     const sql = `DELETE FROM users WHERE id = ${id}`;
    //     const res = await this.con(sql);
    //     return res;
    // } 

    public static validate(input:IComment){
        const schema = Joi.object({
            postId:Joi.number().required(),
            author:Joi.string(),
            content:Joi.string().required(),
            email:Joi.string().required()
             .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        })
        return schema.validate(input);
    }
}