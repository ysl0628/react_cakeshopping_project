import React, { useState } from 'react';
import List from './components/List';
import { v4 } from 'uuid';
import CartContext from './store/cartContext';
import FilterItem from './components/FilterItem';
import Cart from './components/Cart';

// 模擬一組食物數據
const ITEMS_DATA = [
  {
    id: v4(),
    title: '檸檬塔',
    desc: '選用酸甜的檸檬調合奶油交織出清爽滑順的檸檬奶醬，搭配烘烤至香酥的塔皮與海綿蛋糕',
    price: 70,
    img: '/img/cake/1.jpg'
  },
  {
    id: v4(),
    title: '巴斯克風焦糖起司蛋糕',
    desc: '濃郁的巴斯克起司蛋糕為主體，層層向上堆疊有巧克力堅果甘納許、焦糖慕斯。',
    price: 130,
    img: '/img/cake/2.jpg'
  },
  {
    id: v4(),
    title: '栗子布蕾焦糖蛋糕',
    desc: '鬆軟的焦糖風味戚風蛋糕，抹上栗子奶油與放入栗子塊，中間夾入滑嫩烤布蕾。',
    price: 120,
    img: '/img/cake/3.jpg'
  },
  {
    id: v4(),
    title: '芒果香緹布蕾蛋糕',
    desc: '夏季限定！滿滿鮮甜的台灣在地芒果搭配香緹鮮奶油，再夾入一層蛋香濃郁的烤布蕾。',
    price: 140,
    img: '/img/cake/4.jpg'
  },
  {
    id: v4(),
    title: '法式千層薄餅',
    desc: '一片片輕薄Q彈的法式餅皮，搭配香氣迷人的香草卡士達餡，非常誘人。',
    price: 95,
    img: '/img/cake/5.jpg'
  },
  {
    id: v4(),
    title: '經典起司蛋糕',
    desc: '使用濃郁的Cream Cheese及酸奶創造出綿密香濃的乳酪蛋糕，非常誘人。',
    price: 100,
    img: '/img/cake/6.jpg'
  },
  {
    id: v4(),
    title: '咖啡巧克力松露蛋糕',
    desc: '以義大利烘焙咖啡融合巧克力蛋糕，其中蘊含迷人的巧克力榛果及酥脆的餅乾脆片。',
    price: 85,
    img: '/img/cake/7.jpg'
  }
]

export default function App() {

  // 建立一個 state 來儲存食物列表
  const [itemsData, setItemsData] = useState(ITEMS_DATA);

  // 建立一個 state 來儲存購物車的數據
  /* 
    1.商品[] (products)
    2.商品總數 (totalAmount)
    3.商品總價 (totalPrice)
  */
  const [cartData, setCartData] = useState({
    products: [],
    totalAmount: 0,
    totalPrice: 0
  });

  // 建立一個函數來過濾搜尋的數據
  const filterHandler = (keyword) => {
    const newItemsData = ITEMS_DATA.filter(item => item.title.includes(keyword));
    setItemsData(newItemsData);
  };

  // 向購物車中添加商品
  const addItem = (item) => {
    // item 要添加進購物車的商品
    // 對購物車進行複製
    const newCart = { ...cartData };
    const { products } = newCart;
    // // 判斷購物車中是否存在該商品
    // eslint-disable-next-line no-unused-expressions
    products.indexOf(item) === -1 ? (newCart.products.push(item), item.amount = 1) : item.amount += 1;

    // if (newCart.products.indexOf(item) === -1) {
    //   // 將 item 添加到購物車中
    //   newCart.products.push(item);

    //   // 修改商品數量
    //   item.amount = 1;
    // } else {
    //   // 如果商品已存在購物車中，則增加商品數量
    //   item.amount += 1;
    // }



    // 增加購物車中的商品總數量
    newCart.totalAmount += 1;
    // 增加購物車中的總金額
    newCart.totalPrice += item.price;
    // 更新購物車內容
    setCartData(newCart);
  };

  // 於購物車中刪除商品
  const removeItem = (item) => {
    // 對購物車進行複製
    const newCart = { ...cartData };
    // 對購物車裡的數量進行判斷
    item.amount >= 1 ? item.amount -= 1 : newCart.products.splice(newCart.products.indexOf(item), 1);
    // if (item.amount >= 1) {
    //   item.amount -= 1;
    // } else {
    //   newCart.products.splice(newCart.products.indexOf(item), 1)
    // }

    // 修改商品總數及總金額
    newCart.totalAmount -= 1;
    // 增加購物車中的總金額
    newCart.totalPrice -= item.price;

    //更新購物車內容
    setCartData(newCart);
  }

  return (
    <CartContext.Provider value={{ ...cartData, addItem, removeItem }}>
      <div>
        <FilterItem onFilter={filterHandler} />
        <List
          itemsData={itemsData}
        />
        <Cart />
      </div>
    </CartContext.Provider>
  )
}
