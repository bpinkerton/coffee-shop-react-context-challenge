import { FC } from "react";

export type CoffeeLabelProps = {
  name: string;
};

const CoffeeLabel: FC<CoffeeLabelProps> = ({ name }) => {
  return <h3>{`${name}`}</h3>;
};

export default CoffeeLabel;
