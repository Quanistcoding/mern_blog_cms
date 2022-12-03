import mysql from "mysql";

export default class Db{
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
}