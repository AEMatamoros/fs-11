import HelloWorld from "./components/HelloWorld";

export default function App() {
  return (
    <div>
      <HelloWorld
        name={"Alexis"}
        age={27}
        address={{ list: ["Dir1", "Dir2"] }}
        isAuth={true}
      >
        <p>Bienvenido eres el mejor, buen trabajo</p>
        <p>Tarea por hacer: Informe</p>
        <div>
          <span>Span</span>
        </div>
      </HelloWorld>

      <HelloWorld
        name={"Eduardo"}
        age={27}
        address={{ list: [] }}
        isAuth={false}
      ></HelloWorld>
    </div>
  );
}
