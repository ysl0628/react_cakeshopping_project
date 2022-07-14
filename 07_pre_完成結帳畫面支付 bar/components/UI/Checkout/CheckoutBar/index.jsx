import React, { useContext } from 'react';
import classes from './index.module.css';
import CartContext from '../../../../store/cartContext';


export default function CheckoutBar() {

  const ctx = useContext(CartContext);

  return (
    <div className={classes.Bar}>
        <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
      <button
        className={classes.CheckButton}>
        付款去
      </button>
    </div>
  )
}
