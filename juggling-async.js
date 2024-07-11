const http = require("http");
const https = require("https");
const url = require("url");

const urlString = process.argv.slice(2, 5);

function getData(urlString, callback) {
  const urlObject = url.parse(urlString);
  const protocol = urlObject.protocol === "https" ? https : http;

  protocol
    .get(urlString, (response) => {
      let data = "";
      response.setEncoding("utf-8");
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        callback(null, data);
      });
    })
    .on("error", (err) => callback(err));
}

let results = [];
let count = 0;
function printResults() {
  results.forEach((res) => {
    // console.log(res.length);
    console.log(res);
  });
}

urlString.forEach((url, index) => {
  getData(url, (err, data) => {
    results[index] = data;
    count++;
    if (count === urlString.length) printResults();
  });
});
