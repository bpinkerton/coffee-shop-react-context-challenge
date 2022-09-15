import { createContext } from "react";

type AppCtx = {
  itemCount: number;
  setItemCount: Function;
};

const AppContext = createContext<AppCtx>({
  itemCount: 0,
  setItemCount: () => {}
});

export default AppContext;
