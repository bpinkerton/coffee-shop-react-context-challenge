import { CSSProperties, FC } from "react";

const CartImgStyle: CSSProperties = {
  display: "inline-block",
  cursor: "pointer",
  height: "50%",
  paddingTop: "8px",
  paddingRight: "18px"
};

const CartSpanStyle: CSSProperties = {
  color: "#fff",
  fontSize: "80%",
  backgroundColor: "#e74c3c",
  position: "absolute",
  top: "4%",
  left: "95%",
  transform: "translate(-50%,-90%)",
  padding: "0 1%",
  borderRadius: "1000px"
};

type CartProps = {
  count: number;
};

const Cart: FC<CartProps> = ({ count }) => {
  return (
    <>
      <img
        style={CartImgStyle}
        alt="cart"
        src="https://img.icons8.com/glyph-neue/44/ffffff/shopping-cart.png"
      />
      {count > 0 && <div style={CartSpanStyle}>{count}</div>}
    </>
  );
};

export default Cart;
