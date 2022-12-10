
const request = require("supertest");

describe("GET /api/comments",()=>{
    let server,con;

    beforeEach(async ()=>{
        const serverObj = await require('../../index');
        server = serverObj.server;
        con = serverObj.con;
    });

    afterEach(async ()=>{
        await server.close();
        await con.end();
    });

    it("should return status code 200",async ()=>{
        const res = await request(server).get("/api/comments");
        expect(res.status).toBe(200);
    })
})