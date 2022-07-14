import React from 'react';
import classes from './index.module.css';
import Counter from '../../UI/Counter';

export default function Item({ item, noDesc }) {
  const { title, desc, price, img } = item;
  return (
    <div className={classes.Item}>
      <div className={classes.ImgBox}>
        <img src={img} alt="" srcSet="" />
      </div>
      <div className={classes.Content}>
        <h2 className={classes.Title}>{title}</h2>
        {noDesc ? null :  <p className={classes.Desc}>{desc}</p>}
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>{price}</span>
          <Counter
            item={item}
          />
        </div>
      </div>
    </div>
  )
}
