import { FC, useContext } from "react";
import AppContext from "../app-context";
import Button from "../components/atoms/Button";

const AddToCartButton: FC<{}> = () => {
  const { itemCount, setItemCount } = useContext(AppContext);

  function onClickCart() {
    setItemCount(itemCount + 1);
  }

  return <Button onClickCart={onClickCart} buttonText={"Add to cart"} />;
};

export default AddToCartButton;
