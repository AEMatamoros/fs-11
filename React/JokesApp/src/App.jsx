import axios from "axios";
import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { jokes: [], searchInput: "", error: null, loading: false };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchJoke = this.searchJoke.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async searchJoke() {
    try {
      this.setState({ loading: true });
      let response = await axios.get(
        `https://v2.jokeapi.dev/joke/Programming??blacklistFlags=sexist,explici&type=single&contains=${
          !!this.state.searchInput.trim() !== ""
            ? this.state.searchInput
            : "man"
        }`
      );
      let { id, joke } = response.data;
      this.setState((oldState) => {
        return { ...oldState, jokes: [...oldState.jokes, { id, joke }] };
      });
    } catch (error) {
      alert("Ocurrio un error");
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.searchJoke();
  }

  render() {
    return (
      <div className="container">
        <div className="row p-4">
          <div className="col-10">
            <input
              type="text"
              name="searchInput"
              value={this.state.searchInput}
              onChange={this.handleInputChange}
              id="searchInput"
              className="form-control"
            />
          </div>
          <div className="col-2">
            <button
              className="btn btn-outline-primary"
              onClick={this.searchJoke}
            >
              Buscar
            </button>
          </div>
          <div className="col-12 row gap-2 p-4">
            {this.state.loading ? (
              <h3>Cargando</h3>
            ) : (
              <>
                {this.state.jokes.length > 0 && (
                  <>
                    {this.state.jokes.map(({ id, joke }) => (
                      <div className="card col-4" key={id}>
                        <div className="card-body">
                          <h5 className="card-title">Joke!!!</h5>x``
                          <p className="card-text">{joke}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
