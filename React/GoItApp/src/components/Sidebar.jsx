import PropTypes from "prop-types";
import React, { Component } from "react";
//Tratar de evitar
import "../styles/SidebarItem.css";
//Si se permite el uso de modulos css
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import css from "../styles/SidebarItem.module.css";
import CustomToogleButton from "./shared/CustomToogleButton";
import CustomFontAwesomeIcon from "./shared/Icon";
const CustomLi = styled.li`
  display: flex;
  gap: 8px;
`;

export default class Sidebar extends Component {
  constructor() {
    super();
    this.handleProps = this.handleProps.bind(this);
  }

  handleProps() {
    console.log("Props", this.props);
  }

  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: `${this.props.showSidebar ? "250px" : 0} `,
          minWidth: `${this.props.showSidebar ? "250px" : 0} `,
          transform: `translateX(${this.props.showSidebar ? 0 : "-250px"} )`,
        }}
      >
        Sidebar
        <div
          style={{
            width: "100%",
            background: "#171E2A",
            height: "50px",
            position: "absolute",
            top: 0,
          }}
        ></div>
        {this.props.sidebarMenu && this.props.sidebarMenu.length > 0 && (
          <ul
            style={{
              paddingTop: "66px",
              paddingLeft: "24px",
              listStyle: "none",
            }}
          >
            {this.props.sidebarMenu.map((opt, index) => {
              return (
                <SidebarItem
                  key={index}
                  name={opt.name}
                  icon={opt.icon}
                  active={opt.active}
                ></SidebarItem>
              );
            })}
          </ul>
        )}
        {this.props.showSidebar && (
          <CustomToogleButton onClick={this.props.handleToogle}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </CustomToogleButton>
        )}
      </div>
    );
  }
}

class SidebarItem extends Component {
  render() {
    return (
      // Aplicando estilos desde un archivo de modulos css
      // <li className={css.mainColor}>
      //Aplicando estilos con un styled component
      <CustomLi className={css.mainColor}>
        <CustomFontAwesomeIcon icon={this.props.icon} />
        <span>{this.props.name}</span>
      </CustomLi>
    );
  }
}

SidebarItem.propTypes = {
  name: PropTypes.string,
  sidebarMenu: PropTypes.array,
  icon: PropTypes.any,
  active: PropTypes.bool,
};
