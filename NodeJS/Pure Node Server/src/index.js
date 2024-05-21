const http = require("node:http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.method === "GET") {
    res.end("Respuesta del servidor en GET");
  }

  if (req.method === "POST") {
    res.end("Respuesta del servidor en POST");
  }
  if (req.method === "PUT") {
    res.end("Respuesta del servidor en PUT");
  }
  if (req.method === "DELETE") {
    res.end("Respuesta del servidor en DELETE");
  }
});

server.listen(3000, () => {
  console.log("Server on port 3000");
});
