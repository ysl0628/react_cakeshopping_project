import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cartContext';
import CheckoutItem from './CheckoutItem';
import CheckoutBar from './CheckoutBar';


const checkoutRoot = document.getElementById('checkout-root')

export default function Checkout({ onClose }) {

    const ctx = useContext(CartContext);

    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.CloseIcon}>
                <FontAwesomeIcon icon={faXmark} onClick={onClose} />
            </div>
            <div className={classes.CheckoutDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>購物車資訊</h2>
                </header>
                <div className={classes.CheckoutItem}>
                    {ctx.products.map(item => <CheckoutItem key={item.id} item={item}/>)}
                </div>
                <footer className={classes.Footer}>
                    <p className={classes.Total}>{ctx.totalPrice}</p>
                </footer>
            </div>
            <CheckoutBar />
        </div>,
        checkoutRoot)
}
