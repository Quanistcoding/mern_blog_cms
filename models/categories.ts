import mysql from "mysql";
import Debug from "debug";
import ICategory from "../interfaces/category";
import Db from "./db";

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

    public static async insertOne(data:ICategory){
        const {name} = data;
        const sql = `INSERT INTO categories (name) VALUES ("${name}")`;
        const res = await this.con(sql);
        return res;
    }   

    public static async updateById(id:number,data:ICategory){
        const {name} = data;
        const sql = `UPDATE categories SET name = "${name}" WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    public static async deleteById(id:number){
        const sql = `DELETE FROM categories WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 
}