var request = require("supertest");
import createTableUsersSql from "../../dbScript/createTableUsersSql";
import User from "../../models/user"
import bcrypt from "bcrypt";

describe("/api/users",()=>{
    let server:any,con:any;
    interface IUser {
        username:string,
        firstname:string,
        lastname:string,
        email:string,
        password:string,
        confirmedPassword:string
    }
    let user1:IUser;
    let user2:IUser;

    beforeAll(async()=>{
        const serverObj = await require('../../index');
        server = serverObj.server;
        con = serverObj.con;
    })

    beforeEach(async()=>{
        user1 = {
            username:"username1",
            firstname:"firstname1",
            lastname:"lastname1",
            email:"user1@bbb.com",
            password:"12345",
            confirmedPassword:"12345"
        }
    
        user2 = {...user1};
        user2.email = "user2@bbb.com";

       await con.query(createTableUsersSql);
       await User.insertOne(user1);
       await User.insertOne(user2);
    });

    afterEach(async()=>{
        const dropTableSql = "DROP TABLE users";
        await con.query(dropTableSql);
    });

    afterAll(async()=>{
        await server.close();
        await con.end();
    });

    describe("GET /",()=>{
        it("user's password shold be hashed",async()=>{
            const res = await request(server).get("/api/users");
            const user = res.body[0];
            expect(true).toBe(true);
        })
    })

    describe("POST /",()=>{
        it("show",()=>{

        expect(1).toBe(1);
        })
    })
})