import { FC, useState } from "react";
import "./styles.css";

import CoffeeHeader from "./smart-components/CoffeeHeader";
import CoffeePage from "./pages/CoffeePage";
import AppContext from "./app-context";

const App: FC<{}> = () => {
  const [itemCount, setItemCount] = useState<number>(1);
  return (
    <AppContext.Provider value={{ itemCount, setItemCount }}>
      <div className="App">
        <CoffeeHeader />
        <CoffeePage />
      </div>
    </AppContext.Provider>
  );
};

export default App;
