import { FC } from "react";

import List from "../components/molecules/List";

type CoffeeData = {
  name: string;
  id: string;
  poster: string;
  description: string;
};

type CoffeeListProps = {
  coffeeListData: CoffeeData[];
  onItemSelected: Function;
  selectedCoffeeId: string;
  coffeeMap: Record<string, any>;
};

const CoffeeList: FC<CoffeeListProps> = ({
  coffeeListData,
  onItemSelected,
  selectedCoffeeId,
  coffeeMap
}) => {
  return (
    <>
      <List
        dataList={coffeeListData}
        onItemSelected={onItemSelected}
        selectedItemId={selectedCoffeeId}
      />
    </>
  );
};

export default CoffeeList;
