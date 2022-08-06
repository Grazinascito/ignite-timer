import styled from "styled-components";

export type ColorListProps = "primary" | "secondary" | "success" | "danger";

interface ButtonContainerProps {
  colorList: ColorListProps;
}

const buttonColors = {
  primary: "cyan",
  secondary: "blue",
  success: "green",
  danger: "red",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 15px;
  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["green-500"]};
  margin: 5px;
  border: 0;
  border-radius: 8px;
`;

export const DivAAA = styled.div`
  width: 300px;
  height: 400px;

  background-color: aquamarine;
`;
