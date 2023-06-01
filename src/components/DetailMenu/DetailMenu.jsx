import React, { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import styles from './DetailMenu.module.css';

export default function DetailMenu({ main, price, side, price2 }) {
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ujFAidfLF8tkft5xHVjiYno04GTtxIKCCHigzMQ&s
  const [menuList, setMenuList] = useState([]);
  const [sideList, setSideList] = useState([]);

  // 메인메뉴
  const makeMenuList = (main, price) => {
    const result = [];
    for (let i = 0; i < main.length; i++) {
      let item = {};
      item.name = main[i];
      item.price = price[i];
      result.push(item);
    }
    setMenuList(result);
  };
  useEffect(() => {
    makeMenuList(main, price);
  }, []);
  // 사이드메뉴
  const makeSideList = (side, price2) => {
    const result2 = [];
    for (let i = 0; i < side.length; i++) {
      let item = {};
      item.name = side[i];
      item.price = price2[i];
      result2.push(item);
    }
    setSideList(result2);
  };
  useEffect(() => {
    makeSideList(side, price2);
  }, []);

  return (
    <div>
      <p className={styles.mainmenu}>메인 메뉴</p>
      {menuList.map((item) => (
        <div className={styles.container1}>
          <div className={styles.container2}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price}>{item.price}원</p>
          </div>
          <img
            className={styles.image}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ujFAidfLF8tkft5xHVjiYno04GTtxIKCCHigzMQ&s'
            alt='list_image'
          />
        </div>
      ))}
      <p className={styles.sidemenu}>사이드 메뉴</p>
      {sideList.map((item) => (
        <div className={styles.container1}>
          <div className={styles.container2}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price}>{item.price}원</p>
          </div>
          <img
            className={styles.image}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ujFAidfLF8tkft5xHVjiYno04GTtxIKCCHigzMQ&s'
            alt='list_image'
          />
        </div>
      ))}
    </div>
  );
}
