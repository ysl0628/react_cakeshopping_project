import React, { useContext } from 'react';
import Backdrop from '../../UI/Backdrop';
import classes from './index.module.css';
import CartContext from '../../../../src/store/cartContext';
import Item from '../../List/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartDetails() {

    const ctx = useContext(CartContext);

    return (
        <Backdrop>
            <div className={classes.CartDetails}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>購物車資訊</h2>
                    <div className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清除購物車</span>
                    </div>
                </header>
                <div className={classes.CheckList}>
                    {
                        ctx.products.map( item => 
                            <Item noDesc key={item.id} item={item}/>
                            )
                    }
                </div>
            </div>
        </Backdrop>
    )
}
