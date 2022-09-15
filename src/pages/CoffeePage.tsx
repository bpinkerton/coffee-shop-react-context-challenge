import { FC } from "react";

import CoffeeCatalogue from "../components/organisms/CoffeeCatalogue";
import data from "../../static/coffeshop-data.json";

const CoffeePage: FC<{}> = () => {
  return (
    <>
      <CoffeeCatalogue coffeeListData={data} />
    </>
  );
};

export default CoffeePage;
