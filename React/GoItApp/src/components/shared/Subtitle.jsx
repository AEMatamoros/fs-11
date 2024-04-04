import { Children, Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CustomSubtitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default class Subtitle extends Component {
  render() {
    return (
      <CustomSubtitleContainer>
        <FontAwesomeIcon icon={this.props.subtitleIcon}></FontAwesomeIcon>
        <h3 style={{ fontWeight: 700 }}>{this.props.children}</h3>
      </CustomSubtitleContainer>
    );
  }
}

Subtitle.defaultProps = {
  subtitleIcon: faPlus,
};
