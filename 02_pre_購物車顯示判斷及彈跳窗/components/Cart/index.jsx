import React, { useContext } from 'react';
import classes from './index.module.css';
import iconImg from '../../asset/shopping.png';
import cartContext from '../../store/cartContext'

export default function Cart() {

  const ctx = useContext(cartContext);

  return (
    <div className={classes.Cart}>
      <div className={classes.Icon}>
        {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
        <img src={iconImg} alt="" />
      </div>
      {ctx.totalAmount === 0 ? 
      <p className={classes.NoItem}>尚未選購商品</p> : 
      <p className={classes.TotalPrice}>{ctx.totalPrice}</p>}      
      <button className={`${classes.CheckButton}  ${ctx.totalAmount === 0 ? classes.Disable : ''}`}>結帳去</button>
    </div>
  )
}
