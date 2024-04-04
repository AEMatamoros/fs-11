import PropTypes from "prop-types";
import { Component } from "react";

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        {/* Como utilizar children components */}
        {this.props.children}
        {/* Como utilizar props */}
        HelloWorld {this.props.name} Age {this.props.age}
        {/* Como renderizar condicionalmente desde un componente */}
        {/* <GrettingMessage isAuth={this.props.isAuth}></GrettingMessage> */}
        {/* Renderizado condicional */}
        {this.props.isAuth ? (
          <p>
            <strong>Esta loggeado</strong>
          </p>
        ) : (
          <p>
            <strong>No Autenticado</strong>
          </p>
        )}
        {/* Renderizado condicional pero solo me importa si es truue */}
        {this.props.isAuth && <h1>Solo si es true</h1>}
        {/* Como Iterar un arreglo dentro de un objeto */}
        {this.props.address.list && this.props.address.list.length > 0 ? (
          <ul>
            {this.props.address.list.map((addr, index) => (
              <li key={index}>{addr}</li>
            ))}
          </ul>
        ) : (
          <h3>Sin Direcciones por mostrar</h3>
        )}
      </div>
    );
  }
}

class GrettingMessage extends Component {
  render() {
    {
      return this.props.isAuth ? (
        <div>Hola</div>
      ) : (
        <div>Hola pero no te has logueado</div>
      );
    }
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  address: PropTypes.any,
  isAuth: PropTypes.bool,
};
