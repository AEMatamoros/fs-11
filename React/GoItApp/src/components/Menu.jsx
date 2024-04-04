import React, { Component } from "react";
import styled from "styled-components";

const CustomNavbar = styled.nav`
  height: 50px;
  background-color: gray;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  padding: 16px;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 0;
`;

export default CustomNavbar;
