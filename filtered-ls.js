const fs = require("fs");
const path = require("path");

const dirPath = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(dirPath, (err, files) => {
  const filterdFiles = files.filter(
    (file) => path.extname(file) === `.${fileExt}`
  );
  filterdFiles.forEach((file) => {
    console.log(file);
  });
});
