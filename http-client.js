const http = require("http");
const https = require("https");
const url = require("url");

const urlString = process.argv[2];
const urlObject = url.parse(urlString);
const protocol = urlObject.protocol === "https:" ? https : http;

protocol.get(urlString, (res) => {
  res.setEncoding("utf-8");
  res.on("data", (chunk) => {
    console.log(chunk);
  });

  res.on("error", (err) => {
    console.error(err.message);
  });
});
