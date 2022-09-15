import { CSSProperties, FC } from "react";
import CoffeeInfo from "../atoms/CoffeeInfo";
import CoffeeLabel from "../atoms/CoffeeLabel";
import CoffeePoster from "../atoms/CoffeePoster";

const coffeePreviewStyle: CSSProperties = {
  padding: "0.75em",
  paddingTop: "1em",
  display: "flex",
  flexDirection: "column",
  alignItems: "right",
  justifyContent: "right",
  width: "100%"
};

export type CoffeePreviewProps = {
  coffeeName: string;
  posterUrl: string;
  description: string;
  price: string;
};

const CoffeePreview: FC<CoffeePreviewProps> = ({
  coffeeName,
  posterUrl,
  description,
  price
}) => {
  return (
    <div style={coffeePreviewStyle}>
      <CoffeePoster coffeeName={coffeeName} posterUrl={posterUrl} />
      <CoffeeLabel name={coffeeName} />
      <CoffeeInfo label={"Description"} value={description} />
      <CoffeeInfo label={"Price"} value={price} />
    </div>
  );
};

export default CoffeePreview;
