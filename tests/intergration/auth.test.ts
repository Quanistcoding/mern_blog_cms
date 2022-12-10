const request = require("supertest");

describe("/api/auth",()=>{  
    let server:any,con:any;
    let input:{
         email?:string | null,
         password?:string | null
    }
    beforeEach(async ()=>{
        const serverObj = await require('../../index');
        con = serverObj.con;
        server = serverObj.server;
        input = {
            email:"aaa@bbb.com",
            password:"12345"
        }
    });

    afterEach(async ()=>{
       await server.close();
       await con.end();
    });

const request = require("supertest");
    it("should return status 400 if email is not passed",async ()=>{
        input.email = null;
        const res = await request(server).post("/api/auth")
        .send(input)
        expect(res.status).toBe(400);
    })
})