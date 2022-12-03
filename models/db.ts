import mysql from "mysql";

export default class Db{
    private static db_hostname:string = "localhost";
    private static db_username:string = "root";
    private static db_password:string = "password";
    private static db_name:string = "node_blog_cms";
    protected static con = mysql.createConnection({
        host:Db.db_hostname,
        user:Db.db_username,
        password:Db.db_password,
        database:Db.db_name
    });
}