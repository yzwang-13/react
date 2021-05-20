import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiSliceActions} from '../../store/uiSlice';

const CartButton = (props) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();


    const toggleCartHandler = () => {
        dispatch(uiSliceActions.toggleCart());
    }
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
