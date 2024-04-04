import { Component } from "react";
import {
  Card,
  CitiesList,
  City,
  Department,
  DepartmentList,
  MainContent,
  Menu,
  Paper,
  Sidebar,
  Tutor,
  Tutorlist,
} from "./components";

import sidebarMenu from "./contants/Sidebar";
import content from "./contants/Content";

import CustomToogleButton from "./components/shared/CustomToogleButton";

import paperIMG from "./assets/img/paperIMG.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Counter from "./components/shared/Counter";

export default class App extends Component {
  constructor() {
    super();
    this.handleToogle = this.handleToogle.bind(this);
    this.setNewFatherState = this.setNewFatherState.bind(this);
    this.state = { ...content, showSidebar: true };
  }

  handleToogle() {
    // console.log(this.state.showSidebar);
    this.setState({ showSidebar: !this.state.showSidebar });
    // console.log(this.state.showSidebar);
    // console.log("first");
  }

  setNewFatherState(newState) {
    this.setState(newState);
  }

  // shouldComponentUpdate(nextProps, nexState) {
  //   return this.state !== nexState;
  // }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar
          sidebarMenu={sidebarMenu}
          handleToogle={this.handleToogle}
          showSidebar={this.state.showSidebar}
        />
        <MainContent>
          <Menu>
            <div>
              {!this.state.showSidebar && (
                <CustomToogleButton
                  onClick={this.handleToogle}
                  position="static"
                >
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </CustomToogleButton>
              )}
              <span>Informacion de la Universidad</span>
            </div>
          </Menu>
          <Paper content={this.state}>
            <img src={paperIMG} alt="" width={"80%"} />
            <p>Universidad</p>
            <p>{content.name}</p>
          </Paper>
          <Card content={this.state}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            corporis vel voluptas modi est alias reprehenderit, vero placeat
            distinctio ipsum, adipisci aut ea odio blanditiis velit assumenda
            odit rerum consequatur.
          </Card>
          <Tutorlist
            content={this.state}
            setFatherState={this.setNewFatherState}
          />
          <CitiesList content={this.state} />
          <City content={this.state} />
          <DepartmentList content={this.state} />
          <Department content={this.state} />
          {/* Componente de prueba para probar el ciclo de vida del componente */}
          {/* {this.state.showSidebar && <TestComponent></TestComponent>} */}
          {/* <Counter interval={2}></Counter> */}
        </MainContent>
      </div>
    );
  }
}

class TestComponent extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  //Metoods del ciclo de vida del componente
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        Contador de TestComponent : {this.state.counter}
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Cambiar Valor
        </button>
      </div>
    );
  }
}
