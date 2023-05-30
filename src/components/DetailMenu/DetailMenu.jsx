import React, { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import styles from './DetailMenu.module.css';

export default function DetailMenu({ main, price }) {
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ujFAidfLF8tkft5xHVjiYno04GTtxIKCCHigzMQ&s
  const [menuList, setMenuList] = useState([]);

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

  return (
    <div>
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
    </div>
  );
}
