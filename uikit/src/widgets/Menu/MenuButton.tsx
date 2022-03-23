import styled from "styled-components";
import Button from "../../components/Button/Button";

const MenuButton = styled(Button)`
  color: #282829;
  padding: 0 8px;
  border-radius: 8px;
  margin: 0;
  height: 50px;
`;

MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
