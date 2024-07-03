const express = require("express");
const http = require("http");
const Websocket = require("ws");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Bienvenido a la chat api");
});
const server = http.createServer(app);

const wsServer = new Websocket.Server({ server });

wsServer.on("connection", (ws) => {
  ws.id = uuidv4();
  // console.log(ws);

  ws.on("message", (message) => {
    wsServer.clients.forEach((client) => {
      // console.log(client.id);
      if (client.id != ws.id && client.readyState === Websocket.OPEN) {
        // console.log(message.toString());
        // console.log(client.id);
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
