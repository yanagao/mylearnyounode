const http = require("http");
const https = require("https");
const url = require("url");

const urlString = process.argv[2];

const urlObject = url.parse(urlString);
const protocol = urlObject.protocol === "https" ? https : http;

protocol.get(urlString, (response) => {
  let data = "";
  response.setEncoding("utf-8");
  response.on("data", (chunk) => {
    data += chunk;
  });
  response.on("end", () => {
    console.log(data.length);
    console.log(data);
  });
});
