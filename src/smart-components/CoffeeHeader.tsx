import { CSSProperties, FC, useContext } from "react";

import Header from "../components/atoms/Header";
import Cart from "../components/atoms/Cart";
import AppContext from "../app-context";

const CoffeeHeader: FC<{}> = () => {
  const { itemCount } = useContext(AppContext);
  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#873e23",
    justifyContent: "space-between"
  };
  return (
    <div className="header" style={headerStyle}>
      <Header pageTitle="☕ Coffee Shop" />
      <Cart count={itemCount} />
    </div>
  );
};

export default CoffeeHeader;
