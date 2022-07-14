import React, { useContext, useState } from 'react';
import classes from './index.module.css';
import iconImg from '../../asset/shopping.png';
import cartContext from '../../store/cartContext';
import CartDetails from './CartDetails';

export default function Cart() {

  const ctx = useContext(cartContext);

  // 新增一個 state 來設置購物車是否顯示
  const [showDetails, setShowDetails] = useState(false)

  // 新增一個顯示購物車的函數
  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0){
      setShowDetails(false);
      return;
    };
    setShowDetails(prevState => !prevState)
  }

  return (
    <div onClick={toggleDetailsHandler} className={classes.Cart}>
      {/* 引入購物車詳細資訊 如果 showDetails 為真才顯示*/}
      {showDetails && <CartDetails />}
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
