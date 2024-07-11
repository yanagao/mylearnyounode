const net = require("net");

const port = process.argv[2];
const server = net.createServer((socket) => {
  const date = new Date();
  const formatNumber = (num) => num.toString().padStart(2, "0");
  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);
  const day = formatNumber(date.getDate());
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`;
  socket.end(formattedDate);
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
