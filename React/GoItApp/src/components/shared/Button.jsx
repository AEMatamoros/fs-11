import Button from "react-bootstrap/Button";
import styled from "styled-components";

const CustomButton = styled(Button)`
  border-radius: 0;
  background-color: #ff6b0a;
  &:hover {
    background-color: teal;
  }
`;

export default CustomButton;
