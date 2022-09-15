import { CSSProperties, FC } from "react";

export const buttonHeight = "60px";

const ButtonStyle: CSSProperties = {
  boxShadow: "inset 0px 1px 0px 0px #a6827e",
  background: "linear-gradient(to bottom, #7d5d3b 5%, #634b30 100%)",
  backgroundColor: "#7d5d3b",
  borderRadius: "3px",
  border: "1px solid #54381e",
  display: "inline-block",
  cursor: "pointer",
  color: "#ffffff",
  padding: "6px 24px",
  textShadow: "0px 1px 0px #4d3534"
};

type ButtonProps = {
  buttonText: string;
  onClickCart: Function;
};

const Button: FC<ButtonProps> = ({ buttonText, onClickCart }) => {
  return (
    <button className="button" style={ButtonStyle} onClick={onClickCart}>
      {buttonText}
    </button>
  );
};

export default Button;
