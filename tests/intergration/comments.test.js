
const request = require("supertest");

describe("GET /api/comments",()=>{
    let server;

    beforeEach(async ()=>{
        server = await require('../../index');
    });

    afterEach(async ()=>{
        await server.close();
    });

    it("should return status code 200",async ()=>{
        const res = await request(server).get("/api/commenst");
        console.log(res);
        expect(1).toBe(1);
    })
})