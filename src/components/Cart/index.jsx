import React, { useContext, useEffect, useState } from 'react';
import classes from './index.module.css';
import iconImg from '../../asset/shopping.png';
import cartContext from '../../store/cartContext';
import CartDetails from './CartDetails';
import Checkout from '../UI/Checkout';

export default function Cart() {
  
  const ctx = useContext(cartContext);

  // 新增一個 state 來設置購物車是否顯示
  const [showDetails, setShowDetails] = useState(false);
  // 新增一個 state 來設置結帳視窗是否顯示
  const [showCheckout, setShowCheckout] = useState(false);

  // 解決購物車清空時自動顯示窗口
  useEffect(()=>{
    if (ctx.totalAmount === 0) {
        setShowDetails(false);
        setShowCheckout(false);
      }
  }, [ctx.totalAmount, setShowDetails, setShowCheckout]);

  // 新增一個顯示購物車的函數
  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    };
    setShowDetails(prevState => !prevState)
  }

  // 新增一個顯示結帳視窗的函數
  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  }
// 新增一個關閉結帳視窗的函數（傳遞給 Checkout 組件使用）
  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  }

  return (
    <div onClick={toggleDetailsHandler} className={classes.Cart}>
      {/* 引入結帳頁面 如果 showDetails 為真才顯示*/}
      {showCheckout && <Checkout onClose={hideCheckoutHandler}/>}
      {/* 引入購物車詳細資訊 如果 showDetails 為真才顯示*/}
      {showDetails && <CartDetails />}
      <div className={classes.Icon}>
        {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
        <img src={iconImg} alt="" />
      </div>
      {ctx.totalAmount === 0 ?
        <p className={classes.NoItem}>尚未選購商品</p> :
        <p className={classes.TotalPrice}>{ctx.totalPrice}</p>}
      <button
        onClick={showCheckoutHandler}
        className={`${classes.CheckButton}  ${ctx.totalAmount === 0 ? classes.Disable : ''}`}>
        結帳去
      </button>
    </div>
  )
}
