//NOTE: Static way of making a simple server with no Bun or express etc, alot more convoluded
import http from "http";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Hello World");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Thanks for the message");
  } else {
    res.statusCode = 404;
    res.setHeader("content-type", "text/plain");
    res.end("404 Webpage Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
