import React from 'react';
import Item from './Item';
import classes from './index.module.css'

// 餐點列表的組件
export default function List({ itemsData }) {
  return (
    <div className={classes.List}>{
      itemsData.map(item =>
        <Item
          key={item.id}
          item={item}
        />)
    }
    </div>
  )
}
