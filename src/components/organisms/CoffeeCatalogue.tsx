import { CSSProperties, FC, useState, useMemo } from "react";

import CoffeePreview from "../molecules/CoffeePreview";
import CoffeeList from "../../smart-components/CoffeeList";
import AddToCartButton from "../../smart-components/AddToCartButton";
import { listToRecord } from "../../utils";

const coffeeCatalogueWrapperStyle: CSSProperties = {
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%",
  backgroundColor: "#c39f91"
};

const coffeeSectionWrapperStyle: CSSProperties = {
  flex: "1 1 50%",
  height: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const coffeePreviewWrapperStyle: CSSProperties = {
  ...coffeeSectionWrapperStyle,
  marginRight: "1em",
  alignSelf: "flex-start"
};

const coffeeListWrapperStyle: CSSProperties = {
  ...coffeeSectionWrapperStyle,
  textAlign: "left",
  alignSelf: "flex-end"
};

type CoffeeData = {
  name: string;
  id: string;
  poster: string;
  description: string;
};

type CoffeeCatalogueProps = {
  coffeeListData: CoffeeData[];
};

const CoffeeCatalogue: FC<CoffeeCatalogueProps> = ({ coffeeListData }) => {
  const [selectedCoffeId, setSelectedCoffeId] = useState<string>(
    coffeeListData[0].id
  );

  const coffeeMap = useMemo(() => listToRecord(coffeeListData, "id"), [
    coffeeListData
  ]);

  const selectedCoffe = coffeeMap[selectedCoffeId] || coffeeListData[0];

  const { name, poster, description, price } = selectedCoffe;
  return (
    <section style={coffeeCatalogueWrapperStyle}>
      <section style={coffeePreviewWrapperStyle}>
        <CoffeePreview
          coffeeName={name}
          posterUrl={poster}
          description={description}
          price={price}
        />
        <AddToCartButton />
      </section>
      <section style={coffeeListWrapperStyle}>
        <CoffeeList
          coffeeListData={coffeeListData}
          onItemSelected={setSelectedCoffeId}
          selectedCoffeeId={selectedCoffeId}
          coffeeMap={coffeeMap}
        />
      </section>
    </section>
  );
};

export default CoffeeCatalogue;
