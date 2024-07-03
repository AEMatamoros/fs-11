import { useEffect, useState } from "react";
import io from "socket.io-client";
import Swal from "sweetalert2";
import Button from "./components/Button";
const socketClient = io("http://localhost:3000");

export default function App() {
  const [id, setId] = useState("");
  const [selection, setSelection] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);
  // const [socketClient, setSocketClient] = useState("");

  useEffect(() => {
    socketClient.emit("shake");
  });

  useEffect(() => {
    // setSocketClient(socketClient);
    // socketClient.emit("helloserver", { name: "Alexis" });

    // socketClient.on("helloclient", (response) => {
    //   console.log(response);
    // });
    socketClient.on("shakeResponse", (response) => {
      setId(response.id);
    });
    socketClient.on("updatePlayers", (currentPlayers) => {
      setPlayers(() => {
        return currentPlayers.filter((player) => player);
      });
    });
    socketClient.on("userDisconnected", () => {
      Swal.fire({
        title: "Usuario desconectado",
        text: "El otro usuario se enojo",
        icon: "warning",
        confirmButtonText: "OK",
      }).then(() => {
        location.reload();
      });
    });
    socketClient.on("gameResponse", (response) => {
      Swal.fire({
        title: response.text,
        icon: "warning",
      });
    });
    return () => {
      socketClient.on("disconnect");
    };
  }, [players, id]);

  const handleSendRequest = () => {
    socketClient.emit("choiceSelected", { selection, id });
  };

  const handleUserConnect = () => {
    socketClient.emit("connectPlayer", { playerName });
    // Swal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success",
    // });
  };
  return (
    <div className="p-4 ">
      <h1>Bienvenido al Piedra papel y tijera de GoiIT</h1> <span>{id}</span>
      <input
        type="text"
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
      />
      <button onClick={handleUserConnect}>Connectar</button>
      <ul>
        {players.map((ply, index) => (
          <li key={index}>
            Jugador {index + 1} : {ply.playerName}
          </li>
        ))}
      </ul>
      <span>Usuario uno selecciono esperando respuesta</span>
      <ul>
        <li className="mb-2">
          <Button
            text="Piedra"
            onClick={() => {
              setSelection("Piedra");
            }}
          />
        </li>
        <li className="mb-2">
          <Button
            text="Papel"
            onClick={() => {
              setSelection("Papel");
            }}
          />
        </li>
        <li className="mb-2">
          <Button
            text="Tijera"
            onClick={() => {
              setSelection("Tijera");
            }}
          />
        </li>
      </ul>
      <p>Tu seleccion: {selection}</p>
      <button className="btn btn-success" onClick={handleSendRequest}>
        Enviar respuesta
      </button>
      <p>Resultado: Empate</p>
    </div>
  );
}
