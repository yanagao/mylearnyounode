const mymodule = require("./mymodule");
const dirPath = process.argv[2];
const fileExt = process.argv[3];
if (!dirPath || !fileExt) {
  console.error("Please provide a directory path and a file extension.");
  process.exit(1);
}
mymodule(dirPath, fileExt, (err, filteredFiles) => {
  if (err) {
    process.exit(1);
  }
  filteredFiles.forEach((file) => console.log(file));
});
