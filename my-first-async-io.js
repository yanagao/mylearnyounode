const fs = require("fs");

const filePath = process.argv[2];

fs.readFile(filePath, "utf-8", (err, data) => {
  const newlineCount = data.split("\n").length - 1;
  console.log(newlineCount);
});
