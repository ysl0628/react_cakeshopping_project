import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const checkoutRoot = document.getElementById('checkout-root')

export default function Checkout({onClose}) {
    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.CloseIcon}>
            <FontAwesomeIcon icon={faXmark} onClick={onClose}/>
            </div>
        </div>,
        checkoutRoot)
}
