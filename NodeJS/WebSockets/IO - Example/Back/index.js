const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Bienvenido a la chat api");
});
const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (ws) => {
  // console.log(ws);
  ws.on("helloserver", (request) => {
    console.log(request);
    io.emit("helloclient", { name: "El " + request.name });
  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
