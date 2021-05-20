import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price } = props.item;
  console.log(props.item)

  const addItemHandler = () => {
    // dispatch(cartActions.addItem({id: id, amount: 1, totalPrice: price, price: price, title: title, description: description}))

    dispatch(cartActions.addItem({id: id, amount: 1, totalPrice: total, price: price, title: title}))
  }

  const removeItemHandler = () => {
    console.log('dispatched removeHandler')
    dispatch(cartActions.addItem({id: id, amount: -1, totalPrice: total, price: price, title: title}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
