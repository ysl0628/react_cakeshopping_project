import React from 'react';
import Backdrop from '../Backdrop';
import classes from './index.module.css'


export default function Confirm({ ConfirmText, onCancel, onSubmit }) {
  return (
    <Backdrop 
    onClick={(e) => { onCancel(e)}}
    className={classes.ConfirmOuter}
    >
      <div className={classes.Confirm}>
        <p className={classes.ConfirmText}>{ConfirmText}</p>
        <div>
          <button
            onClick={(e) => { onCancel(e) }}
            className={classes.Cancel}>取消</button>
          <button
            onClick={(e) => { onSubmit(e) }}
            className={classes.Submit}>確認</button>
        </div>
      </div>
    </Backdrop>
  )
}
