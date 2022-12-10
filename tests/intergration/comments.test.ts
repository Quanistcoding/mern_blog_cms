
const request = require("supertest");
import createTableCommentsSql from "../../dbScript/createTalbeCommentsSql"
import express from "express";


describe("GET /api/comments",()=>{
    let server:any,con:any;

    beforeEach(async ()=>{
        const serverObj = await require('../../index');
        server = serverObj.server;
        con = serverObj.con;

        const dropTableSql = "DROP table comments";
        await con.query(dropTableSql);
        await con.query(createTableCommentsSql);
        let insetSql = "INSERT INTO comments (postId,author,email,content) ";
            insetSql += "VALUES (1,'author','email','content')";
        await con.query(insetSql);
    });

    afterEach(async ()=>{
        await server.close();
    });

    afterAll(async ()=>{
        await con.end();
    });

    it("should return status code 200",async ()=>{
        const res = await request(server).get("/api/comments");
        expect(res.status).toBe(200);
    })

    it("should return 1 comment",async ()=>{
        const res = await request(server).get("/api/comments");
        console.log(res.body)
        expect(res.body.length).toBe(1);
    })
})