import mysql from "mysql";
import Debug from "debug";
import ICategory from "../dtos/category";
import Db from "./db";
import Joi from "joi";

const debug = Debug("models:categories");

export default class Category extends Db{

    public static async find(){
        const sql = "SELECT * FROM categories";
        const res = await this.con(sql);
        return res;
    }

    public static async findOne(id:number){
        const sql = `SELECT * FROM categories WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    }

    public static async insertOne(input:ICategory){
        const {name} = input;
        const sql = `INSERT INTO categories (name) VALUES ("${name}")`;
        const res = await this.con(sql);
        return res;
    }   

    public static async updateById(id:number,input:ICategory){
        const {name} = input;
        const sql = `UPDATE categories SET name = "${name}" WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    public static async deleteById(id:number){
        const sql = `DELETE FROM categories WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    public static validate(input:ICategory){
        const schema = Joi.object({
            name:Joi.string().required()
        })

        return schema.validate(input);
    }
}