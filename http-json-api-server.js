const http = require("http");
const { URL } = require("url");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parseUrl = new URL(req.url, `http://localhost:${port}`);
  const pathname = parseUrl.pathname;
  const isoTime = parseUrl.searchParams.get("iso");

  if (pathname === "/api/parsetime" && isoTime) {
    const date = new Date(isoTime);
    const result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(result));
  } else if (pathname === "/api/unixtime" && isoTime) {
    const date = new Date(isoTime);
    const result = {
      unixtime: date.getTime(),
    };
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(JSON.stringify({ error: "not found" }));
  }
});

server.listen(port);
