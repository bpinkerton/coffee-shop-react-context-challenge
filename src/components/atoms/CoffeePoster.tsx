import { FC } from "react";

const coffeePosterStyle = {
  marginRight: "auto",
  marginLeft: "auto",
  height: "35vh",
  width: "40vh",
  alignItems: "center"
};

export type CoffeePosterProps = {
  coffeeName: string;
  posterUrl: string;
};

const CoffeePoster: FC<CoffeePosterProps> = ({ coffeeName, posterUrl }) => {
  return <img style={coffeePosterStyle} src={posterUrl} alt={coffeeName} />;
};

export default CoffeePoster;
