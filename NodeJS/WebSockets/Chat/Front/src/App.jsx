import { useEffect, useState } from "react";

export default function App() {
  const [WS, setWS] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState([]);

  const handleSendMessage = () => {
    // console.log("Enviando el mensaje al ws");
    setMessages((oldMessages) => {
      return [...oldMessages, "Yo :" + currentMessage];
    });
    WS.send(currentMessage);
  };

  useEffect(() => {
    const wsClient = new WebSocket("ws://localhost:3000");

    wsClient.onopen = () => {
      console.log("Conectando al servidor");
      setWS(wsClient);
    };

    wsClient.onmessage = (message) => {
      setMessages((oldMessages) => {
        return [...oldMessages, message.data];
      });
    };

    return () => {
      wsClient.close = () => {
        console.log("Desconectando del servidor");
      };
    };
  }, [messages]);
  return (
    <div>
      <div>
        <h2>Chat Anónimo</h2>
        <div
          style={{
            border: "1px solid #ccc",
            minHeight: "200px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
