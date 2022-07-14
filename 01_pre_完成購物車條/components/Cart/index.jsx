import React, { useContext } from 'react';
import classes from './index.module.css';
import iconImg from '../../asset/shopping.png';
import cartContext from '../../store/cartContext'

export default function Cart() {

    const ctx = useContext(cartContext);

  return (
    <div className={classes.Cart}>
        <div className={classes.Icon}>
            <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
            <img src={iconImg} alt="" />   
        </div>
        <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        <button className={classes.CheckButton}>結帳去</button>
    </div>
  )
}
