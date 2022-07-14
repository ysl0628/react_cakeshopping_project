import React from 'react';
import classes from './index.module.css';
import ReactDOM from 'react-dom';

const backdropRoot = document.getElementById('backdrop-root')

export default function Backdrop(props) {
  return ReactDOM.createPortal(
    <div
      {...props}
      className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
    </div>, backdropRoot)
}
