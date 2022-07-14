import React, { useContext } from 'react';
import classes from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cartContext';

export default function Counter({ item }) {

  const ctx = useContext(CartContext);

  const addButtonHandler = () => {
    ctx.cartDispatch({type:"ADD",item:item});
  };
  
  const subButtonHandler = () => {
    ctx.cartDispatch({type:"REMOVE",item:item});
  };

  return (
    <div className={classes.Counter}>
      {/* 如果有 amount，且 amount 不為 0，則出現減的按鈕及數字 */}
      {
        (item.amount && item.amount !== 0) ? (
          <>
            <button onClick={subButtonHandler} className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus} className={classes.Minus}/>
            </button>
            <span className={classes.Count}>{item.amount}</span>
          </>
        ) : null
      }
      <button onClick={addButtonHandler} className={classes.Add}>
        +
      </button>
    </div>
  )
}
