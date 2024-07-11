const fs = require("fs");
const http = require("http");
const path = require("path");

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);

  readStream.on("error", (err) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal server error");
  });
});

server.listen(port);
