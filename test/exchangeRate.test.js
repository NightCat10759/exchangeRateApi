// article.test.js
/* global describe it before */
const { expect } = require("chai");

const supertest = require("supertest");

const api = supertest("http://localhost:3000"); // 定義測試的 API 路徑
require("../index.js");
let APItoken; // 全域變數等待 before() 取得 Token

describe("getExchangeRate", () => {
  it("getExchangeRate should be an object with msg and amount", (done) => {
    api
      .get("/getExchangeRate?source=USD&target=JPY&amount=$1,525") // 測試取得所有文章
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        // 斷言做資料驗證(文章id、用戶id、文章標題、文章標籤、文章內容)
        console.log(res.body);
        expect(res.body).to.have.property("msg");
        expect(res.body).to.have.property("amount");
        expect(res.body.msg).to.be.a("string");
        expect(res.body.amount).to.be.a("string");
        expect(res.body.msg).equals("success");
        expect(res.body.amount).equals("170,496.52");
        done();
      });
  });
  it("getHi should return a 200 response", (done) => {
    api
      .get("/getHi?name=mike") // 測試api
      .expect(200, done);
  });
});
