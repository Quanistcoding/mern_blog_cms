import mysql from "mysql";
import Debug from "debug";
import IUser from "../interfaces/user";
import Db from "./db";

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
    
    public static async insertOne(data:IUser){
        const {username,firstname,lastname} = data;
        const sql = `INSERT INTO users (name) VALUES ("${name}")`;
        const res = await this.con(sql);
        return res;
    }   

    public static async updateById(id:number,data:IUser){
        const {username,firstname,lastname,email} = data;
        const sql = `UPDATE users SET name = "${name}" WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 

    public static async deleteById(id:number){
        const sql = `DELETE FROM users WHERE id = ${id}`;
        const res = await this.con(sql);
        return res;
    } 
}