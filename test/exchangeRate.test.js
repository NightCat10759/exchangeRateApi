// article.test.js
/* global describe it before */
const { expect } = require("chai");

const supertest = require("supertest");
require("../dist/index.bundle");

const api = supertest("http://localhost:3000"); // 定義測試的 API 路徑
let APItoken; // 全域變數等待 before() 取得 Token

describe("getExchangeRate", () => {
  it("getExchangeRate should be an object with msg and amount", (done) => {
    api
      .get("/getExchangeRate?source=JPY&target=USD&amount=$1,525") // 測試取得所有文章
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        // 斷言做資料驗證(文章id、用戶id、文章標題、文章標籤、文章內容)
        expect(res.body[0]).to.have.property("article_id");
        expect(res.body[0].article_id).to.be.a("number");
        done();
      });
  });
  it("should return a 200 response", (done) => {
    api
      .get("/article/personal") // 測試取得某用戶的所有文章
      .set("Authorization", `Bearer ${APItoken}`) // 將 Bearer Token 放入 Header 中的 Authorization
      .expect(200, done);
  });
});
