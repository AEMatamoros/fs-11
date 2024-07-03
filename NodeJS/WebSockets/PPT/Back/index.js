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
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

let player1 = undefined;
let player2 = undefined;
io.on("connection", (client) => {
  // console.log(client.id); //Se ejecvuta cada vex que se conecta un cliente
  // on: Recibir mensajes
  // emit: Enviar mensajes
  // client.on("helloserver", (request) => {
  //   // console.log(request);
  //   io.emit("helloclient", { name: "El " + request.name });
  // });
  client.on("shake", () => {
    client.emit("shakeResponse", { id: client.id });
  });

  client.on("connectPlayer", (data) => {
    if (!player1 && data.playerName) {
      player1 = { ...data, id: client.id };
    } else {
      player2 = { ...data, id: client.id };
    }
    io.emit("updatePlayers", [player1, player2]);
  });

  client.on("disconnect", () => {
    // console.log("Disconnected");
    if (player1 && player2) {
      player1 = undefined;
      player2 = undefined;
      io.emit("userDisconnected");
    }
  });
  client.on("choiceSelected", (data) => {
    if (player1 && player1.id === data.id) {
      player1.selection = data.selection;
    } else {
      player2.selection = data.selection;
    }
    if (player1.id && player2.id && player1.selection && player2.selection) {
      let text = "Empate";
      if (
        (player1.selection === "Piedra" && player2.selection === "Tijera") ||
        (player1.selection === "Papel" && player2.selection === "Piedra") ||
        (player1.selection === "Tijera" && player2.selection === "Papel")
      ) {
        text = player1.playerName + " es el ganador ";
      }

      if (
        (player2.selection === "Papel" && player1.selection === "Piedra") ||
        (player2.selection === "Piedra" && player1.selection === "Tijera") ||
        (player2.selection === "Tijera" && player1.selection === "Papel")
      ) {
        text = player2.playerName + " es el ganador ";
      }
      io.emit("gameResponse", { text });
    }
  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
