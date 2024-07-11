const fs = require("fs");
const path = require("path");

module.exports = (dirPath, fileExt, callback) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) return callback(err);
    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${fileExt}`
    );
    callback(null, filteredFiles);
  });
};
