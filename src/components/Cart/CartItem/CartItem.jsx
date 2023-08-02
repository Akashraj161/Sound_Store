import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="image-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">Product Name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>2</span>
            <span>*</span>
            <span>&#8377;9999</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
