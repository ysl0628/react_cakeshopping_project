import React from 'react';
import classes from './index.module.css';
import Counter from '../../Counter';

export default function CheckoutItem({ item }) {

    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.ItemImg}>
                <img src={item.img} alt="" />
            </div>
            <div className={classes.Desc}>
                <h2 className={classes.Title}>{item.title}</h2>
                <div className={classes.PriceBox}>
                    {/* Counter 中要記得傳入 item */}
                    <Counter item={item} />
                    <div className={classes.Price}>{item.amount * item.price}</div>
                </div>
            </div>
        </div>
    )
}
