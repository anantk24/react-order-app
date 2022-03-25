import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const totalPrice = 24;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCancelCart}>
          Close
        </button>
        <button className={classes.button} onClick={props.onCancelCart}>
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
