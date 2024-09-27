const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getsecretdata") {
    res.end("There is no secret data");
  }
  res.end("Hello, world!");
});

const PORT = 7777;
server.listen(PORT);
