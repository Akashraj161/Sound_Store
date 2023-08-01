import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">Hello this is cart</div>
    </div>
  );
};

export default Cart;
