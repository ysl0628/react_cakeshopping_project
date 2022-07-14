import React, { useContext, useState } from 'react';
import Backdrop from '../../UI/Backdrop';
import classes from './index.module.css';
import CartContext from '../../../../src/store/cartContext';
import Item from '../../List/Item';
import Confirm from '../../UI/Confirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartDetails() {

    const ctx = useContext(CartContext);

    // 設置一個 state 控制確認框的顯示
    const [showConfirm, setShowConfirm] = useState(false);

    // 增加函數顯示確認窗口
    const showConfirmHandler = () => {
        setShowConfirm(true);
    }

    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    }

    const submitHandler = () => {
        ctx.removeAll();
    }


    return (
        <Backdrop>
            {showConfirm && <Confirm
                onSubmit={submitHandler}
                onCancel={cancelHandler}
                ConfirmText={'確認清空購物車嗎？'} />}
            <div
                onClick={e => e.stopPropagation()}
                className={classes.CartDetails}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>購物車資訊</h2>
                    <div onClick={showConfirmHandler} className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清除購物車</span>
                    </div>
                </header>
                <div className={classes.CheckList}>
                    {
                        ctx.products.map(item =>
                            <Item noDesc key={item.id} item={item} />
                        )
                    }
                </div>
            </div>
        </Backdrop>
    )
}
