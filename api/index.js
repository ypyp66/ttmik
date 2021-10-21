const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

app.get("/naver/realtime", function (req, res) {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://datalab.naver.com/");
    const html = await page.content();

    const $ = cheerio.load(html);

    const ul = $("div.keyword_rank > div > div > ul");
    const title = $("div.keyword_rank > div > strong ");

    const ulArr = [];
    let titleArr = [];
    let obj = {};

    title.each((index, element) => {
      if (index >= ul.length - 1) return;
      const span = $(element).find(".title_cell");

      span.each((idx, e) => {
        titleArr[index] = $(e).text();
      });
    });

    ul.each((index, element) => {
      if (index >= ul.length - 1) return;
      const arr = [];
      const li = $(element).find(".list");

      li.each((idx, a) => {
        const id = $(a).find(".num").text();
        const text = $(a).find(".title").text();
        arr.push({
          id,
          text,
        });
      });
      ulArr.push(arr);
      obj[titleArr[index]] = arr;
    });

    res.json(obj);
  })();
});

let server = app.listen(5000, function () {
  let port = server.address().port;

  console.log("Server is working : PORT - ", port);
});
