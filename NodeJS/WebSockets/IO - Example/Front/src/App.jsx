import { useEffect } from "react";
import io from "socket.io-client";

const socketClient = io("http://localhost:3000");

export default function App() {
  useEffect(() => {
    socketClient.emit("helloserver", { name: "Alexis" });

    socketClient.on("helloclient", (response) => {
      console.log(response);
    });
    return () => {
      socketClient.on("disconnect");
    };
  }, []);

  return <div>App</div>;
}
