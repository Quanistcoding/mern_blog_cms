var request = require("supertest");

describe("/api/auth",()=>{  
    let server:any,con:any;
    let input:{
         email?:string | null,
         password?:string | null
    }
    beforeAll(async ()=>{
        const serverObj = await require('../../index');
        con = serverObj.con;
        server = serverObj.server;
      
    });

    beforeEach(()=>{
        input = {
            email:"aaa@bbb.com",
            password:"12345"
        }
    });

    afterAll(async ()=>{
       await server.close();
       await con.end();
    });

    it("should return status 400 if email is not passed",async ()=>{
        input.email = null;
        const res = await request(server).post("/api/auth")
        .send(input)
        expect(res.status).toBe(400);
    })

    it("should return status 400 if password is not passed",async ()=>{
        input.password = null;
        const res = await request(server).post("/api/auth")
        .send(input)
        expect(res.status).toBe(400);
    })
})