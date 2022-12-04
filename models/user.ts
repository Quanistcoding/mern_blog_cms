import mysql from "mysql";
import Debug from "debug";
import IUser from "../dtos/user";
import Db from "./db";
import Joi from "joi";

const debug = Debug("models:user");

export default class User extends Db{
    public static async find(){
        const sql = "SELECT * FROM users";
        const res = await this.con(sql);
        return res;
    }

    public static async findOne(id:number){
        const sql = `SELECT * FROM users WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    }
    
    public static async insertOne(input:IUser){
        const {username,firstname,lastname,password,email} = input;
        let sql = `INSERT INTO users (username,firstname,lastname,password,email) VALUES `;
            sql += `("${username}","${firstname}","${lastname}","${password}","${email}")`;
        const res = await this.con(sql);
        return res;
    }   

    public static async updateById(id:number,input:IUser){
        const {username,firstname,lastname,email} = input;
        let sql = `UPDATE users SET username = "${username}", `;
        sql += `firstname = "${firstname}",lastname = "${lastname}",email = "${email}" `;
        sql += `WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    public static async deleteById(id:number){
        const sql = `DELETE FROM users WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    public static validateInsert(input:IUser){
        const schema = Joi.object({
            username:Joi.string().required(),
            password:Joi.string().required().min(3).max(1024),
            confirmedPassword:Joi.valid(Joi.ref('password')).required().messages({
                "any.only":"confirmedPassword does not match password"
            }),
            firstname:Joi.string().required(),
            lastname:Joi.string().required(),
            email:Joi.string().required()
             .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        })

        return schema.validate(input);
    }

    public static validateUpdate(input:IUser){
        const schema = Joi.object({
            username:Joi.string(),
            firstname:Joi.string(),
            lastname:Joi.string(),
            email:Joi.string()
             .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        })

        return schema.validate(input);
    }
}