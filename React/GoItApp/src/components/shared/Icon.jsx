import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import styled from "styled-components";

class Icon extends Component {
  render() {
    return <FontAwesomeIcon icon={this.props.icon} />;
  }
}

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #ff6b0a;
  font-size: ${(props) => (props.active ? "18px" : "16px")};
  width: 16px;
  height: 16px;
`;

export default CustomFontAwesomeIcon;
