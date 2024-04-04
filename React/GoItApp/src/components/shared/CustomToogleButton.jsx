import styled from "styled-components";
const CustomToogleButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ff6b0a;
  border: none;
  color: white;
  position: ${(props) => (props.position ? props.position : "absolute")};
  top: 64px;
  right: 0px;
`;

export default CustomToogleButton;
