const http = require("http");

const PORT = process.env.PORT || 4200;

const requestHandler = (request, response) => {
  response.setHeader("Content-Type", "text/plain");
  if (request.url === "/users" || request.url === "/users/") {
    response.end("User route: Here is the list of users.\n");
  } else if (request.url === "/products") {
    response.end("Product route: Here is the list of products.\n");
  } else if (request.url === "/orders") {
    response.end("Order route: Here is the list of orders.\n");
  } else if (request.url === "/health") {
    response.end("Health check: Server is running fine.\n");
  } else {
    response.end("Hello, World!\n");
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});