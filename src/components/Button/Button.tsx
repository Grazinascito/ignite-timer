import { ButtonContainer, ColorListProps} from "./Button.styles";

interface ButtonProps {
  colorList: ColorListProps;
}

export function Button({ colorList }: ButtonProps) {
  return <ButtonContainer colorList={colorList}>Enviar</ButtonContainer>
}